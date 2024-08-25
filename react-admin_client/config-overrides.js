// config-overrides.js
const { override, addLessLoader, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('antd', {
    libraryDirectory: 'es',
    style: 'true', // or 'css'
  }),
  // Add other customizations here
);
