import path from 'path';
import webpack from 'webpack';

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr';

module.exports = {
  entry: {
    bundle: [path.resolve(__dirname, '../src/main.js'), hotMiddlewareScript],
    vendor: ['react', 'react-dom', 'redux', 'axios', hotMiddlewareScript],
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[name].js',
    publicPath: '/',
  },
  devtool: '#source_map',
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(
      /* chunkName= */
      'vendor',
      /* filename= */
      'js/vendor.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js|jsx$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ['react-hot', 'babel'],
    }, {
      test: /\.css$/,
      loaders: [
        'style?sourceMap',
        'css?modules&importLoaders=1&localIdentName=[path]_[name]_[local]_[hash:base64:5]'
      ]
    }],
  },
};
