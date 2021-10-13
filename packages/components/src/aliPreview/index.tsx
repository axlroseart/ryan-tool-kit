// 阿里云文件预览
// pdf、ppt文件预览使用该组件
import * as React from 'react';
import { useEffect, useRef, forwardRef, useImperativeHandle } from 'react';
import OSSViewer from '@frontend/oss-viewer';

export interface AliPreviewProps {
  [propName:string]:any;
  fileExt:string;
  url:string;
  complete?:() => void;
}

export interface IRefProps {
  aliInstance:any;
}

declare const CODEMAOCONFIG:any;

export const AliPreview:React.FunctionComponent<AliPreviewProps> = forwardRef<
  IRefProps,
  AliPreviewProps
>((props, ref) => {
  const { fileExt, url, complete } = props;
  const boxRef = useRef<HTMLDivElement>(null);
  const viewer = useRef<any>();
  const aliInstance = useRef<any>({ loading: false });
  useImperativeHandle(ref, () => ({
    aliInstance: aliInstance,
  }));
  // 初始化实例
  useEffect(() => {
    // 加载文件
    const loadFile = async() => {
      if (!viewer?.current) {
        alert('OSSViewer 初始化失败');
        return;
      }
      const isOssUri = viewer.current.isOssUri(url);
      if (!isOssUri) {
        alert('预览文件地址有误');
      } else {
        try {
          await viewer?.current.load(url, fileExt);
        } catch (err) {
          console.log(err);
          alert('资源加载出错');
        }
        await viewer.current.aliInstance?.ready();
        aliInstance.current = viewer.current.aliInstance;
        // 实例化完成callback
        complete && complete();
      }
    };
    viewer.current = new OSSViewer({
      env: CODEMAOCONFIG?.api?.captcha, // 'dev'|'staging'|'prod'|'test'
      platform: 'CNR',
      container: boxRef.current as any,
    });
    // 加载文件
    loadFile();
  }, [url]);
  return (
    <div
      className="w-full h-full "
      ref={boxRef} />
  );
});
