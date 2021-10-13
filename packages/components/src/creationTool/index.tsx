import * as React from 'react';
import {
  consumerConfig,
  ApiEnv,
  ToolType,
  ok,
} from '@crc/tools-sdk';
import '../styles/creationTool/index.less';

const CreationTool:React.FC<any> = (props) => {
  const toolContaner = React.useRef<HTMLIFrameElement>(null);
  const creationTooler = React.useRef<any>(null);

  const init = async() => {
    // 传入参数进行初始化配置
    const result = await consumerConfig({
      /**
       * 签名。用于鉴权。
       */
      signature: 'abcdefg',
      /**
       * 登录态Token
       */
      token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJDb2RlbWFvIEF1dGgiLCJ1c2VyX3R5cGUiOiJzdHVkZW50IiwiZGV2aWNlX2lkIjowLCJ1c2VyX2lkIjoxMDAwNjU0NjM0LCJpc3MiOiJBdXRoIFNlcnZpY2UiLCJwaWQiOiJPcU1WWHZYcCIsImV4cCI6MTYzNzkyNDYwNCwiaWF0IjoxNjM0MDM2NjA0LCJqdGkiOiI4OTBkNDUyNy0yMzFkLTQxY2QtOGU3ZS1hMGM5ZmFjODFmODEifQ.591wQvb9umRBWxwu5E_dRW3QbgqyLeKluk-xTdcGRJs',
      /**
       * SDK对应的API环境。仅在直接使用webSDK时有效。
       */
      apiEnv: ApiEnv.Test,
      /**
       * 注入的工具配置项
       */
      toolOptions: {
        /**
         * 工具类型
         */
        type: ToolType.Kitten,
        /**
         * iframe的容器，一个div dom
         */
        container: toolContaner.current,
        /**
         * 事件监听，监听来自工具内部的事件。
         */
        on: (event) => {
          console.log(11);
        },
        /**
         * 工具的配置项，不同的工具可支持的配置项不同。
         */
        configuration: {
        },
        /**
         * 传入作品id，在初始化时会默认加载该作品。
         */
        // workId: 33333,
      },
    });
    // 检查SDK初始化是否成功
    if (ok(result)) {
      const sdk = result.body.cSDK;

      // 待application模块准备完成后，再加载作品
      const isOk = ok(await sdk.application.ready());
      if(isOk){
        creationTooler.current = sdk.application;
        sdk.application.loadWork({
          work: {
            fileUrl: 'https://dev-cdn-common.codemao.cn/dev/303/cnr/curriculum/courseware/1631779110992035-牛顿的土豆-工程包.bcm',
            type: 'fileUrl',
          },
        });
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
  }, [creationTooler.current]);

  return (
    <iframe
      ref={toolContaner}
      id="creation-tool" />
  );
};

export default CreationTool;
