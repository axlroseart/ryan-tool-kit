import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Ryan Drx Tool Kit',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  mode: 'site',
  outputPath: './dist',
  hash: true,
  chainWebpack: function(config, { webpack }) {
    config
      .plugin('define')
      .tap((args) => {
        args[0].CODEMAOCONFIG = JSON.stringify({
          env: 'dev',
          api: {
            captcha: 'dev',
          },
        });
        return args;
      });
  },
  menus: {
    '/utils': [{
      title: '工具函数',
      children: ['add', 'loadResource', 'fileCanUpload', 'getFileExt', 'getSubCateLog'],
    },
    {
      title: '数据存储',
      children: ['dccCookie', 'dccCookie/key', 'sessionStorage'],
    },
    {
      title: '资源上传',
      children: ['aliUpload'],
    }],
    '/hooks': [{
      title: 'State',
      children: ['useBoolean', 'useLocalStroage'],
    },
    {
      title: 'Action',
      children: ['useCount'],
    },
    ],
    '/components': [{
      title: '基础组件',
      children: ['button'],
    },
    {
      title: '业务组件',
      children: ['dataCard'],
    }],
    '/constants': [
      {
        title: '通用枚举',
        children: [],
      },
    ],
  },
  navs: [
    {
      title: '快速上手',
      path: '/guide',
    },
    {
      title: 'utils',
      path: '/utils',
    },
    {
      title: 'hooks',
      path: '/hooks',
    },
    {
      title: 'components',
      path: '/components',
    },
    {
      title: 'constants',
      path: '/constants',
    },
    {
      title: 'GitHub',
      path: 'https://github.com/axlroseart/ryan-tool-kit',
    },
  ],
  extraPostCSSPlugins: [
    require('tailwindcss'),
    require('postcss-import'),
  ],
});
