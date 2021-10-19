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
    uploadWork:boolean;
    /** SDK事件回调 */
    onEvent:DispatchEvent;
}

const CreationTool:React.FC<CreationToolProps> = (props) => {
  const { token, workId, fileUrl, type, apiEnv, exportFile, uploadWork, onEvent, width = '100%', height = '100%' } = props;
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
        },
        workId,
        fileUrl,
      },
    });
    if (ok(result)) {
      const sdk = result.body.cSDK;
      const isOk = ok(await sdk.application.ready());
      if(isOk){
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
