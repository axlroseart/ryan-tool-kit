// cnr七牛云上传,
import CDNClient, {
  UploadType,
  QiniuUploader,
} from '@cmao/cdn-uploader';
import OSSViewer from '@frontend/oss-viewer';
import { FILE_TYPE } from '@frontend/dcc-constants';
import getSubCataLog from '../getSubCateLog';
import { ICnrUploadParams, IParameters } from '../global';

declare const CODEMAOCONFIG:any;

/**
 *  cnr有对各种文件路径有特殊需求、所以这里封装一下
 */
class QiniuUpload {
  public uploadClient:CDNClient; // 上传实例
  public ossViewer:any;
  constructor(parameters:IParameters, container?:HTMLElement) {
    this.uploadClient = new CDNClient({
      projectName: parameters.projectName,
      env: parameters.env,
    });
    this.ossViewer = new OSSViewer({
      env: CODEMAOCONFIG?.api?.captcha, // 'dev'|'staging'|'prod'|'test'
      platform: 'CNR',
      container: container,
    });
  }

  /**
   * 创建上传
   * @param file 文件
   * @param fileType 文件类型 对应字典FILE_TYPEs
   * @param options 上传配置 见https://phab.srv.codemao.cn/source/codemaster-cdn-uploader/browse/feat%252Fcommon_version/
   */
  public create<T extends UploadType>(
    file:File,
    fileType:FILE_TYPE,
    options:ICnrUploadParams<T>
  ):Promise<QiniuUploader | undefined> {
    return this.uploadClient.create<T>(file, {
      ...options,
      onsuccess: async(data) => {
        try {
          const fileExt = file?.name
            .replace(/^(.*\.)/, '')
            ?.toLocaleLowerCase();
          // ppt、pdf等文档文件需进行加密
          if (
            'ppt,pptx,pdf,xls,xlsx,xlsm,doc,docx,docm'.indexOf(fileExt) > -1
          ) {
            try {
              const url = await this.ossViewer.encryptUrl(data.url);
              data.url = url;
            } catch (error) {
              if (options?.onerror) {
                options?.onerror(new Error('地址加密失败！'));
              }
              return;
            }
          }
          if (options?.onsuccess)
            options?.onsuccess({
              ...data,
              size: file.size,
              fileExt: fileExt,
            });
        } catch (error) {
          options?.onerror && options?.onerror(error);
        }
      },
      filename: `${getSubCataLog(fileType) + Date.now() + file.name}`,
    });
  }
}

export default QiniuUpload;
