import * as React from 'react';
import {
  consumerConfig,
  ApiEnv,
  ok,
  ToolType,
  DispatchEvent,
} from '@crc/tools-sdk';
import '../styles/creationTool/index.less';

export type { IBaseEvent, DispatchEvent } from '@crc/tools-sdk';

export { ToolType, ApiEnv } from '@crc/tools-sdk';

export interface SetMaterialConfigs{
 /**
   * 背景的素材配置，当前使用url作为参数
   */
  scene?:string;
  /**
   * 角色的素材配置，当前使用url作为参数
   */
  actor?:string;
}

export interface CreationToolProps {
    /** 容器宽度 默认100% */
    width?:number | string |'100%';
    /** 容器高度 默认100% */
    height?:number | string |'100%';
    /** 登录凭证 */
    token:string;
    /** 作品id */
    workId?:number;
    /** 工程文件 */
    fileUrl?:string;
    /** 工程类型 */
    type:ToolType;
    /** 环境变量 */
    apiEnv:ApiEnv;
    /** 是否显示导出按钮 */
    exportFile:boolean;
    /** 是否显示下载按钮 */
    uploadWork?:boolean;
    /** 是否显示保存按钮 */
    save?:boolean;
    /** SDK事件回调 */
    onEvent?:DispatchEvent;
    /** presetLink */
    presetLink?:string;
    /** onReady初始完成 */
    onReady?:() => void;
    /** 作品名称 */
    workName?:string;
    /** 设置素材库配置 */
    setMaterialConfigs?:SetMaterialConfigs;
}

const CreationTool:React.FC<CreationToolProps> = (props) => {
  const { token, workId, fileUrl, type, apiEnv, exportFile, uploadWork,
    onReady, onEvent, width = '100%', save, height = '100%', workName, setMaterialConfigs } = props;
  const toolContaner = React.useRef<HTMLIFrameElement>(null);
  const creationTooler = React.useRef<any>(null);

  const init = async() => {
    const result = await consumerConfig({
      appId: '2',
      signature: '123456',
      token,
      apiEnv: apiEnv,
      toolOptions: {
        type,
        container: toolContaner.current,
        on: onEvent,
        configuration: {
          exportFile,
          uploadWork,
          save: {
            showButton: save,
            workName,
          },
        },
        workId,
        fileUrl,
      },
    });
    if (ok(result)) {
      const sdk = result.body.cSDK;
      const isOk = ok(await sdk.application.ready());
      if(isOk){
        setMaterialConfigs && await sdk.application.setMaterialConfigs(setMaterialConfigs);
        onReady && onReady();
        creationTooler.current = sdk.application;
      }
    }
  };

  React.useEffect(() => {
    if(toolContaner.current){
      init();
    }
    return () => {
      creationTooler.current && creationTooler.current.destroy();
    };
  }, [creationTooler.current, props]);

  return (
    <div
      ref={toolContaner}
      style={{ width, height }}
      id="creation-tool" />
  );
};

export default React.memo(CreationTool, (prev, next) => prev.token === next.token && prev.workId === next.workId && prev.fileUrl === next.fileUrl);
