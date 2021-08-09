
export interface VideoPropsType {
  width?:number;
  height?:number;
  source?:string;
  vid?:string;
  getAliVideoAuth?:() => Promise<string>;
  type:'default'|'sceret';
  otherConfig?:any;
}
