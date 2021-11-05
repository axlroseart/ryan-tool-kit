import * as React from 'react';
import axios from 'axios';
import { aliUpload } from '@ryan-drx/utils';
import './index.less';

export default () => {
  const uploader = React.useRef(null);
  const [progress, setPro] = React.useState(0);

  const uploadFile = async(e:any) => {
    uploader.current = await aliUpload.create(e.target.files[0], {
      region: 'cn-shanghai',
      userId: '1303984639806000',
      paramData: '{"Vod":{}}',
      getAuthByuploadInfo: async(uploadInfo) => {
        if (!uploadInfo.videoId) {
          const createUrl = 'https://demo-vod.cn-shanghai.aliyuncs.com/voddemo/CreateUploadVideo?Title=testvod1&FileName=aa.mp4&BusinessType=vodai&TerminalType=pc&DeviceModel=iPhone9,2&UUID=59ECA-4193-4695-94DD-7E1247288&AppVersion=1.0.0&VideoId=5bfcc7864fc14b96972842172207c9e6';
          const { data } = await axios.get(createUrl);
          const uploadAuth = data.UploadAuth;
          const uploadAddress = data.UploadAddress;
          const videoId = data.VideoId;
          return { uploadAuth, uploadAddress, videoId };
        } else {
          const refreshUrl = `https://demo-vod.cn-shanghai.aliyuncs.com/voddemo/RefreshUploadVideo?BusinessType=vodai&TerminalType=pc&DeviceModel=iPhone9,2&UUID=59ECA-4193-4695-94DD-7E1247288&AppVersion=1.0.0&Title=haha1&FileName=xxx.mp4&VideoId=${ uploadInfo.videoId}`;
          const { data } = await axios.get(refreshUrl);
          const uploadAuth = data.UploadAuth;
          const uploadAddress = data.UploadAddress;
          const videoId = data.VideoId;
          return { uploadAuth, uploadAddress, videoId };
        }
      },
      getNewTokenWhenExpire: async(uploadInfo) => {
        const refreshUrl = `https://demo-vod.cn-shanghai.aliyuncs.com/voddemo/RefreshUploadVideo?BusinessType=vodai&TerminalType=pc&DeviceModel=iPhone9,2&UUID=59ECA-4193-4695-94DD-7E1247288&AppVersion=1.0.0&Title=haha1&FileName=xxx.mp4&VideoId=${ uploadInfo.videoId}`;
        const { data } = await axios.get(refreshUrl);
        return data.UploadAuth;
      },
      onSuccess: (uploadInfo) => {
        console.log('onSuccess', uploadInfo);
      },
      onProgress: (uploadInfo, total, progress) => {
        setPro(progress);
      },
    });
  };
  return (
    <div className="upload">
      <input
        type="file"
        multiple
        onChange={uploadFile}
        id="fileUpload" />
      <button
        className="upload-button"
        onClick={() => {
          uploader.current.start();
        }}>开始上传
      </button>
      <button
        className="upload-button"
        onClick={() => {
          uploader.current.stop();
        }}>暂停
      </button>
      <button
        className="upload-button"
        onClick={() => {
          uploader.current.continue();
        }}>恢复上传
      </button>
      <span className="progress">上传进度: {progress} %</span>
    </div>
  );
};
