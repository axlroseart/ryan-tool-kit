export interface AddIn {
  /**
   * @description       也可以显式加上描述名
   * @default           支持定义默认值
   */
  a:number; // 支持识别 TypeScript 可选类型为非必选属性
  /**
   * @description       也可以显式加上描述名
   * @default           支持定义默认值
   */
  b:number; // 支持识别 TypeScript 可选类型为非必选属性
}

const add = ({ a, b }:AddIn):number => a + b;

export default add;
