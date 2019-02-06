const path = require('path');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = env => {
  configOut = {
    mode: 'none',
    context: path.resolve(__dirname, 'src'),
    entry: {
      page1: './page1.js',
      page2: './page2.js',
      page3: './page3.js',
      // page3: ['./page3.js', './common.js']
    },
    optimization: {
      splitChunks: {
        chunks: 'all'
      }
    },
    output: {
      path: __dirname+'/dist',
      filename: '[name]-[id].entry.js',
      chunkFilename: '[name]-[id].chunkfile.js'
    },
    plugins: [
      new BundleAnalyzerPlugin()
    ]
  }
  return configOut;
}
