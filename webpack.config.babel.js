import path from 'path';
import webpack from 'webpack';
import minimist from 'minimist';

const argv = minimist(process.argv.slice(2));
const DEBUG = !!argv.debug;

module.exports = {
  entry: {
    app: './src/main.js',
    vendor: ['react', 'react-dom','redux', 'axios']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js'
  },
  watch: DEBUG,
  cache: DEBUG,
  debug: DEBUG,
  devtool: DEBUG ? 'sourcemap' : false,
  resolve: {
    extensions: ['', '.js', '.jsx', '.json', '.coffee']
  },
  externals: [{

  }],
  plugins: [
    new webpack.optimize.CommonsChunkPlugin(/* chunkName= */'vendor', /* filename= */'js/vendor.js')
  ].concat(DEBUG ? [] : [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.optimize.AggressiveMergingPlugin()
  ]),
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel'
      }, {
        test: /\.jsx?$/,
        loader: 'babel!eslint',
        exclude: /node_modules/
      }
    ]
  }
};
