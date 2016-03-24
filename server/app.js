import koa from 'koa';
import json from 'koa-json';
import compress from 'koa-compress';
import onerror from 'koa-onerror';
import render from 'koa-swig';
import path from 'path';
import config from 'config';
import logger from 'koa-logger';
import routes from './routes';

const app = koa();

app.use(logger());

/**----------------------------------------------------------
 * 异常处理
 ----------------------------------------------------------*/
app.use(function*(next) {
  try {
    yield next;
  } catch (err) {

    if (401 == err.status) {
      this.status = 401;
      this.set('WWW-Authenticate', 'Basic');
      this.body = 'cant haz that';
      return;
    }

    this.status = err.status || 500;
    this.body = {
      status: this.status,
      message: err.message
    };
    this.app.emit('error', err, this);
  }
});

app.on('err', function (err) {
  console.error(err);
});

/**
 * setup render
 */
app.context.render = render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: app.env==='development'?false:'memory', // disable, set to false
  ext: 'html'
});

/**
 * static server for /public
 */
app.use(require('koa-static')(path.join(__dirname, '../build')));

/**
 * setup some middleware
 */
app.use(compress());
app.use(json({pretty: app.env === 'development'}));

/**
 * setup routes
 */
app.use(routes());

const PORT = process.env.PORT || 8000;
app.listen(PORT, err => {
  process.send && process.send('online');
  console.log(`listening on PORT: ${PORT}`);
});
