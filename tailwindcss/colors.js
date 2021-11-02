/**
 * 当前色值按照谷雨设计规范配置：https://lanhuapp.com/web/#/item/project/detailDetach?pid=0f1e3033-1d3b-40e5-b63f-479e79e0a2f2&image_id=5fef1dfd-99c7-42de-96ac-419fd498699f&project_id=0f1e3033-1d3b-40e5-b63f-479e79e0a2f2&fromEditor=true
 */

/**
 * 生成颜色
 */
function generateColors() {
  const colorObj = {
  };

  // 主题色
  generatePrimaryColors(colorObj);
  // black
  colorToObj(colorObj, blackMap);
  return colorObj;
}

function colorToObj(colorObj, colorMap){
  Object.keys(colorMap).forEach((item) => {
    colorObj[item] = colorMap[item];
  });
}
// black
const blackMap = {
  black: '#000',
  'black-25': 'rgba(0,0,0,.25)',
  'black-30': 'rgba(0,0,0,.30)',
  'black-45': 'rgba(0,0,0,.45)',
  'black-65': 'rgba(0,0,0,.65)',
  'black-85': 'rgba(0,0,0,.85)',
  'red-222D': '#F5222D',
};

function generatePrimaryColors(colorObj){
  colorObj.primary = '#4684FF';
  colorObj['primary-50'] = '#F2F5FB';
  colorObj['primary-100'] = '#E7EFFE';
  colorObj['primary-200'] = '#BEDBFF';
  colorObj['primary-300'] = '#92C2FF';
  colorObj['primary-400'] = '#66A7FF';
  colorObj['primary-500'] = '#4684FF';
  colorObj['primary-600'] = '#2874F5';
  colorObj['primary-700'] = '#175AC9';
  colorObj['primary-800'] = '#0D3E91';
  colorObj['primary-900'] = '#0D3E91';
  colorObj.red = '#FF4D4F';
  colorObj['red-50'] = '#FFF1F0';
  colorObj['red-100'] = '#FFCCC7';
  colorObj['red-200'] = '#FFA39E';
  colorObj['red-300'] = '#FF7875';
  colorObj['red-400'] = '#FF4D4F';
  colorObj['red-500'] = '#F5222D';
  colorObj['red-600'] = '#CF1322';
  colorObj['red-700'] = '#A8071A';
  colorObj['red-800'] = '#820014';
  colorObj['red-900'] = '#5C0011';
  colorObj.green = '#13C2C2';
  colorObj['green-50'] = '#E6FFFB';
  colorObj['green-100'] = '#B5F5EC';
  colorObj['green-200'] = '#87E8DE';
  colorObj['green-300'] = '#5CDBD3';
  colorObj['green-400'] = '#36CFC9';
  colorObj['green-500'] = '#13C2C2';
  colorObj['green-600'] = '#08979C';
  colorObj['green-700'] = '#006D75';
  colorObj['green-800'] = '#00474F';
  colorObj['green-900'] = '#002329';
  colorObj.yellow = '#FA8C16';
  colorObj['yellow-50'] = '#FFF7E6';
  colorObj['yellow-100'] = '#FFE7BA';
  colorObj['yellow-200'] = '#FFD591';
  colorObj['yellow-300'] = '#FFC069';
  colorObj['yellow-400'] = '#FFA940';
  colorObj['yellow-500'] = '#FA8C16';
  colorObj['yellow-600'] = '#D46B08';
  colorObj['yellow-700'] = '#AD4E00';
  colorObj['yellow-800'] = '#873800';
  colorObj['yellow-900'] = '#612500';
  colorObj.gray = '#FA8C16';
  colorObj['gray-50'] = '#FFFFFF';
  colorObj['gray-100'] = '#FAFAFA';
  colorObj['gray-200'] = '#F5F5F5';
  colorObj['gray-300'] = '#E8E8E8';
  colorObj['gray-400'] = '#D9D9D9';
  colorObj['gray-500'] = '#BFBFBF';
  colorObj['gray-600'] = '#8C8C8C';
  colorObj['gray-700'] = '#595959';
  colorObj['gray-800'] = '#262626';
  colorObj['gray-900'] = '#000000';
}


module.exports = {
  generateColors,
};
