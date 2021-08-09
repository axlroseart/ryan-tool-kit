import * as React from 'react';
import { addResource } from '@frontend/dcc-utils';
import { VideoPropsType } from './PropsType';
declare const Aliplayer:any;

let randomId = Date.now().toString();

const Video:React.FC<VideoPropsType> = (props) => {
  const { width, height, type, source, vid, getAliVideoAuth, otherConfig } = props;
  const videoId = React.useRef<string>(`video-${randomId += 1}`);
  const player = React.useRef<any>(null);

  const init = async() => {
    const loadPlayJs = addResource({
      resourceUrl: 'https://g.alicdn.com/de/prismplayer/2.9.8/aliplayer-min.js',
      resourceType: 'js',
    });
    const loadPlayerCss = addResource({
      resourceUrl: 'https://g.alicdn.com/de/prismplayer/2.9.8/skins/default/aliplayer-min.css',
      resourceType: 'css',
    });
    const isSuccess = (await Promise.all([loadPlayJs, loadPlayerCss])).filter((item) => item).length === 2;
    if(isSuccess){
      try {
        const commonConfig = {
          'id': videoId.current,
          'width': width ? `${width}px` : '100%',
          'height': height ? `${height}px` : '500px',
          'autoplay': true,
          'isLive': false,
          'rePlay': false,
          'playsinline': true,
          'preload': true,
          'controlBarVisibility': 'hover',
          'useH5Prism': true,
          ...otherConfig,
        };
        if(type === 'default'){
          player.current = new Aliplayer({
            'source': source || '//player.alicdn.com/video/aliyunmedia.mp4',
            ...commonConfig,
          });
        }else{
          const playauth = await getAliVideoAuth();
          player.current = new Aliplayer({
            vid,
            playauth,
            ...commonConfig,
          });
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  React.useEffect(() => {
    init();
    return () => {
      player.current.dispose();
    };
  }, [props]);
  return <div id={videoId.current} />;
};
export default Video;
