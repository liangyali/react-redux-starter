import koa from 'koa';
import json from 'koa-json';
import compress from 'koa-compress';
import render from 'koa-swig';
import path from 'path';
import logger from 'koa-logger';
import routes from './routes';

import webpackMiddleware from 'koa-webpack-dev-middleware';
import webpackHotMiddleware from 'koa-webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack/webpack.development';

const app = koa();
const compiler = webpack(webpackConfig);

app.use(logger());

/**----------------------------------------------------------
 * 异常处理
 ----------------------------------------------------------*/
app.use(function*(next) {
  try {
    yield next;
  } catch(err) {

    if(401 == err.status) {
      this.status = 401;
      this.set('WWW-Authenticate', 'Basic');
      this.body = 'cant haz that';
      return;
    }

    this.status = err.status || 500;
    this.body = {
      status: this.status,
      message: err.message,
    };
    this.app.emit('error', err, this);
  }
});

app.on('err', (err) => {
  console.error(err);
});

app.use(webpackMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  noInfo: false,
}));

app.use(webpackHotMiddleware(compiler));

/**
 * setup render
 */
app.context.render = render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: app.env === 'development' ? false : 'memory', // disable, set to false
  ext: 'html',
});

/**
 * static server for /public
 */
app.use(require('koa-static')(path.join(__dirname, '../build')));

/**
 * setup some middleware
 */
app.use(compress());
app.use(json({
  pretty: app.env === 'development',
}));

/**
 * setup routes
 */
app.use(routes());

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  process.send && process.send('online');
  console.log(`listening on PORT: ${PORT}`);
});
