/**
 *
 * @param file 文件地址
 * @returns 文件类型后缀
 */
const getFileExt = (file:string) => file?.replace(/^(.*\.)/, '')?.toLocaleLowerCase();

export default getFileExt;
