import webpack from 'webpack';
import webpackMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';
import webpackConfig from '../webpack/webpack.development';

export default (app) => {
  if (app.env !== 'development') {
    console.warn('webpack请在开发环境下使用');
    return;
  }

  const compiler = webpack(webpackConfig);

  app.use(webpackMiddleware(compiler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: false,
    stats: {
      colors: true,
      hash: true,
      cached: true,
      chunkModules: false,
      cachedAssets: true,
    }
  }));

  app.use(webpackHotMiddleware(compiler));
};
