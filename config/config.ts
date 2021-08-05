import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Dcc Tool Kit',
  favicon: '/images/logo.png',
  logo: '/images/logo.png',
  mode: 'site',
  outputPath: './dist',
  menus: {
    '/utils': [{
      title: '工具函数',
      children: ['add'],
    }],
    '/hooks': [{
      title: 'State',
      children: ['useBoolean'],
    },
    {
      title: 'Action',
      children: ['useCount'],
    }],
    '/components': [{
      title: '基础组件',
      children: ['button'],
    }],
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
      title: 'GitLab',
      path: 'https://gitlab.codemao.cn/frontend/new-retail/dcc/dcc-tool-kit',
    },
  ],
});
