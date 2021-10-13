import { FILE_TYPE, PRIVATE_FILES } from '@frontend/dcc-constants';
import getFileExt from '../getFileExt';
import QiniuUpload from '../qiniuUpload';

declare const CODEMAOCONFIG:any;

// 上传公有库 - common
export const cnrUpload = new QiniuUpload({
  projectName: 'cnr_school_api',
  env: CODEMAOCONFIG?.api?.captcha,
});

// 上传私有库 - private
export const privateUpload = new QiniuUpload({
  projectName: 'cnr_manager',
  env: CODEMAOCONFIG?.api?.captcha,
});

async function uploadCreate(file:File, fileType:FILE_TYPE, options:any) {
  let qiniuUp;
  const fileExt = getFileExt(file?.name);
  if (PRIVATE_FILES.includes(fileExt)) {
    qiniuUp = await privateUpload.create(file, fileType, options);
  } else {
    qiniuUp = await cnrUpload.create(file, fileType, options);
  }

  return qiniuUp;
}

export default uploadCreate;
