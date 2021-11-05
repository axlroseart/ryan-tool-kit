
/**
 * spacing规格、px为单位,2,4,6,8..48
 */
function generateRadius() {
  const maxRadius = 24;
  const radius = {};
  for (let index = 1; index <= maxRadius; index++) {
    const radiusItem = index * 2;
    radius[radiusItem] = `${radiusItem}px`;
  }
  return radius;
}

module.exports = {
  generateRadius,
};
