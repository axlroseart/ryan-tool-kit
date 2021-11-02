
/**
 * spacing规格、px为单位,2,4,6,8..48
 */
function generateSpacing() {
  const maxSpacing = 24;
  const spacing = {};
  for (let index = 1; index <= maxSpacing; index++) {
    const spacingItem = index * 2;
    spacing[spacingItem] = `${spacingItem}px`;
  }
  return spacing;
}

module.exports = {
  generateSpacing,
};
