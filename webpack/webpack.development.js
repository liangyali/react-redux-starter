import path from 'path';
import webpack from 'webpack';

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr';

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname,'../src/main.js'),hotMiddlewareScript],
    vendor: ['react', 'react-dom', 'redux', 'axios',hotMiddlewareScript],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js',
    publicPath:'/'
  },
  resolve: {
    alias: {

    },
  },
  devtool: 'eval',
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot','babel']
    }]
  }
};
