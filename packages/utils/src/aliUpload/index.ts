import { loadResource } from '@frontend/dcc-utils';


export interface UploadInfo{
    file:{
        name:string;
    };
    endpoint:string;
    bucket:string;
    videoId:string;
    object:any;
}

export interface AuthIn{
    uploadAuth:any;
    uploadAddress:string;
    videoId:string;
}

export interface AaliUploadOptions {
    paramData?:any;
    timeout?:number;
    partSize?:number;
    parallel?:number;
    retryCount?:number;
    retryDuration?:number;
    region:string;
    userId:string;
    getAuthByuploadInfo:(uploadInfo:UploadInfo) => Promise<AuthIn>;
    getNewTokenWhenExpire:(UploadInfo:UploadInfo) => Promise<string>;
    onSuccess?:(uploadInfo:UploadInfo) => void;
    onProgress?:(uploadInfo:UploadInfo, totalSize:number, progress:number) => void;
    onCancel?:(uploadInfo:UploadInfo, code:number, message:string) => void;
    onError?:(uploadInfo:UploadInfo, code:number, message:string) => void;
}

declare const AliyunUpload:any;

const aliUpload = (() => {
  let isInit = false;
  return {
    create: async(file:File|Blob, options:AaliUploadOptions) => {
      let isStart = false;
      if(!isInit){
        const isSuccess = await Promise.all([
          loadResource({
            resourceUrl: 'https://static.codemao.cn/aliyun-oss-sdk-6.13.0.min.js',
            resourceType: 'js',
          }),
          loadResource({
            resourceUrl: 'https://static.codemao.cn/aliyun-upload-sdk-1.5.2.min.js',
            resourceType: 'js',
          }),
        ]);
        const isLoadAll = isSuccess.filter((item) => item).length === 2;
        // eslint-disable-next-line require-atomic-updates
        if(isLoadAll) isInit = true;
      }
      const aliUpload = new AliyunUpload.Vod({
        timeout: options.timeout || 60000,
        partSize: options.partSize || 1048576,
        parallel: options.parallel || 5,
        retryCount: options.retryCount || 3,
        retryDuration: options.retryDuration || 2,
        region: options.region,
        userId: options.userId,
        addFileSuccess: (uploadInfo:UploadInfo) => {
          console.log('AliyunUpload', `添加${ uploadInfo.file.name}文件成功, 等待上传...`);
        },
        // 开始上传
        onUploadstarted: async function(uploadInfo:UploadInfo) {
          console.log('getAuthByuploadInfo', uploadInfo);
          // 如果是 UploadAuth 上传方式, 需要调用 uploader.setUploadAuthAndAddress 方法
          // 如果是 UploadAuth 上传方式, 需要根据 uploadInfo.videoId是否有值，调用点播的不同接口获取uploadauth和uploadAddress
          // 如果 uploadInfo.videoId 有值，调用刷新视频上传凭证接口，否则调用创建视频上传凭证接口
          // 注意: 这里是测试 demo 所以直接调用了获取 UploadAuth 的测试接口, 用户在使用时需要判断 uploadInfo.videoId 存在与否从而调用 openApi
          // 如果 uploadInfo.videoId 存在, 调用 刷新视频上传凭证接口(https://help.aliyun.com/document_detail/55408.html)
          // 如果 uploadInfo.videoId 不存在,调用 获取视频上传地址和凭证接口(https://help.aliyun.com/document_detail/55407.html)
          try {
            const { uploadAuth, uploadAddress, videoId } = await options.getAuthByuploadInfo(uploadInfo);
            aliUpload.setUploadAuthAndAddress(uploadInfo, uploadAuth, uploadAddress, videoId);
          } catch (error) {
            console.log('error', error);
          }
        },
        // 文件上传成功
        onUploadSucceed: function(uploadInfo:UploadInfo) {
          options?.onSuccess && options?.onSuccess(uploadInfo);
          console.log(`onUploadSucceed: ${ uploadInfo.file.name }, endpoint:${ uploadInfo.endpoint }, bucket:${ uploadInfo.bucket }, object:${ uploadInfo.object}`);
        },
        // 文件上传失败
        onUploadFailed: function(uploadInfo:UploadInfo, code:number, message:string) {
          options?.onError && options?.onError(uploadInfo, code, message);
          console.log(`onUploadFailed: file:${ uploadInfo.file.name },code:${ code }, message:${ message}`);
        },
        // 取消文件上传
        onUploadCanceled: function(uploadInfo:UploadInfo, code:number, message:string) {
          options?.onCancel && options?.onCancel(uploadInfo, code, message);
          console.log(`Canceled file: ${ uploadInfo.file.name }, code: ${ code }, message:${ message}`);
        },
        // 文件上传进度
        onUploadProgress: function(uploadInfo:UploadInfo, totalSize:number, progress:number) {
          options.onProgress && options.onProgress(uploadInfo, totalSize, Math.ceil(progress * 100));
        },
        // 上传凭证超时
        onUploadTokenExpired: async function(uploadInfo:UploadInfo) {
          // 上传大文件超时, 如果是上传方式一即根据 UploadAuth 上传时
          // 需要根据 uploadInfo.videoId 调用刷新视频上传凭证接口(https://help.aliyun.com/document_detail/55408.html)重新获取 UploadAuth
          // 然后调用 resumeUploadWithAuth 方法, 这里是测试接口, 所以我直接获取了 UploadAuth
          if(options.getNewTokenWhenExpire){
            const uploadAuth = await options.getNewTokenWhenExpire(uploadInfo);
            aliUpload.resumeUploadWithAuth(uploadAuth);
          }
        },
      });
      return {
        start: () => {
          isStart = true;
          aliUpload.addFile(file, null, null, null, options.paramData || '{"Vod":{}}');
          aliUpload.startUpload();
        },
        cancel: function(){
          isStart && aliUpload.cancelFile();
        },
        stop: function(){
          isStart && aliUpload.stopUpload();
        },
        continue: function(){
          isStart && aliUpload.startUpload();
        },
      };
    },
  };
})();

export default aliUpload;


