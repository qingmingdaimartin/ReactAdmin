// config-overrides.js
const { override, addLessLoader, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: 'css', // or 'less'
  }),
  // Add other customizations here
);
