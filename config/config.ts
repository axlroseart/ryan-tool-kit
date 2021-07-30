import { defineConfig } from 'umi';

export default defineConfig({
  title: 'Dcc Tool Kit',
  favicon: 'https://www.mlz-admin.com/assets/logo.360.png',
  logo: 'https://www.mlz-admin.com/assets/logo.360.png',
  mode: 'site',
  outputPath: './public',
  menus: {
    '/utils': [{
      title: '工具函数',
      children: ['add'],
    }],
    '/hooks': [{
      title: 'State',
      children: ['useBoolean'],
    }],
  },
  navs: [
    {
      title: '开发指南',
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
