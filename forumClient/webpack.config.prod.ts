const mergeProd = require ('webpack-merge');
const commonProd = require('./webpack.config.common.ts');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsWebpackPlugin = require('uglifyjs-webpack-plugin');

const optimiceJS = new UglifyJsWebpackPlugin({
  test: /\.js$/,
  extractComments: true
})

const optimiceCss = new OptimizeCssAssetsPlugin({
  assetNameRegExp: /\.css$/,
  cssProcessorOptions: { dissableComments: { removeAll: true }}
})
module.exports = mergeProd(commonProd, {
  mode: 'production',
  performance: {
    hints: false
  },
  optimization: {
    splitChunks: {
      name: "vendor",
      chunks: "initial",
      minChunks: Infinity
    }
  },
  plugins: [
    optimiceCss,
    optimiceJS
  ]
});