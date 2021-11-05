declare module '*.css';
declare module '*.less';


declare interface Window {
  CODEMAOCONFIG:{
    env:'staging'|'test'|'test01'|'dev'|'pro'|'';
    api:{
      captcha:'dev'|'staging'|'prod'|'test';
    };
  };
}
