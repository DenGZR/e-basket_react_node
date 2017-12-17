const path = require('path');
const webpack = require('webpack');
const config = require('./server/config');
const coreJs = config.coreJs;

module.exports = {
  devtool: 'inline-source-map',
  entry: './core/core/core.js',
  output: {
    filename: coreJs.fileName,
    path: path.join(__dirname, 'server', coreJs.path),
    library: coreJs.libraryName,
  },
  module: {
    rules: [
      {
        test: /\.js?/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['env', 'stage-0'],
        },
      },
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        drop_console: false,
      }
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
