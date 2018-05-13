let mergeDev = require('webpack-merge');
let commonDev = require('./webpack.config.common.ts');

module.exports =  mergeDev(commonDev, {
  mode: 'development',
  devtool: 'cheap-source-map',
  devServer: {
    historyApiFallback: true
  }
});