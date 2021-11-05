/**
 *
 * @param fileSize 文件大小
 * @param fileExt 文件后缀
 * @param maxSize 最大上传大小 默认200MB
 */
// office文件禁止上传容量大小
const fileCanUpload = (fileSize:number, fileExt:string, maxSize = 200) => {
  const mb = +(fileSize / 1024 / 1024).toFixed(2) ;
  if(mb >= maxSize && ['pptx', 'ppt', 'pdf', 'xlsx', 'xls', 'xlsm', 'doc', 'docx', 'docm'].includes(fileExt)){
    // message && message.error(`文件最大限制为${maxSize}MB`);
    alert(`文件最大限制为${maxSize}MB`);
    throw new Error(`文件大小不能超出${maxSize}MB`);
  }
};

export default fileCanUpload;
