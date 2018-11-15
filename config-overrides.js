const { override, addBabelPlugin, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
    addBabelPlugin('babel-plugin-styled-components'),
    addDecoratorsLegacy(),
);
