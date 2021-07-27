import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/builder/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/builder/' : '/',
  title: 'Builder',
  favicon: 'https://peroluo.github.io/builder/images/logo.png',
  logo: 'https://peroluo.github.io/builder/images/logo.png',
  mode: 'site',
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
      title: 'GitHub',
      path: 'https://gitlab.codemao.cn/frontend/new-retail/dcc/dcc-tool-kit',
    },
  ],
});
