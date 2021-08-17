const path = require('path');

module.exports = {
  rootDir: path.join(__dirname, ''),
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  collectCoverageFrom: (collects) => (
    collects.concat([
      '!**/demo/**',
      '!**/style/**',
      '!**/styles/**',
    ])
  ),
};
