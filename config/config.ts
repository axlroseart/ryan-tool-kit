import { defineConfig } from 'umi';

export default defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/builder/' : '/',
  base: process.env.NODE_ENV === 'production' ? '/builder/' : '/',
  title: 'DCC-TOOL-KIT',
  favicon: 'https://luoguoxiong.github.io/builder/images/logo.png',
  logo: 'https://luoguoxiong.github.io/builder/images/logo.png',
  mode: 'site',
  outputPath: './public',
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
