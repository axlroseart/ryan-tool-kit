import {
  EnvType,
  UploadParams,
} from '@cmao/cdn-uploader';

export interface ICnrUploadParams<T extends keyof ResultMap> extends UploadParams<T> {
  onsuccess?:(result:Result<keyof ResultMap>) => void;
}

export type Result<T extends keyof ResultMap> = Pick<ResultMap, T>[T];
export type ResultMap = {
  normal:CnrBasicResult;
  transcode:TranscodeResult;
  slice:SliceResult;
};
export interface CnrBasicResult {
  url:string;
  filename:string;
  size?:number;
  fileExt?:string;
  hash?:string;
}
export interface TranscodeResult extends CnrBasicResult {
  transcodeUrl?:string;
}
export interface SliceResult extends CnrBasicResult {
  m3u8Url?:string;
}
export interface IParameters {
  projectName:string;
  env:EnvType;
}
