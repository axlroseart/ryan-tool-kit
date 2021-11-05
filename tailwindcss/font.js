

const sizeArr = [12, 14, 16, 20, 24, 30, 38, 46];
/**
 * 字体大小规格、px为单位
 */
function generateFontSize() {
  const fontSize = {
  };
  sizeArr.forEach((size, index) => {
    fontSize[size] = `${size}px`;
  });
  return fontSize;
}

module.exports = {
  generateFontSize,
};
