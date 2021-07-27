export default {
  //   esm: 'rollup',
  //   cjs: 'rollup',
  publicPath: '/build-your-lib',
  esm: { type: 'babel' },
  cjs: { type: 'babel' },
  pkgs: ['hooks', 'components', 'utils'],
};
