const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
// Add this line:
const CompressionPlugin = require('compression-webpack-plugin');module.exports = {
  chainWebpack(config) {
    config.plugins.delete('prefetch');
    
    // and this line 
    config.plugin('CompressionPlugin').use(CompressionPlugin);
  }
};