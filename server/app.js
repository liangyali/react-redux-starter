import koa from 'koa';
import render from 'koa-swig';
import path from 'path';
import debug from 'debug';
import logger from 'koa-logger';
import routes from './routes';
import webpack from '../webpack';

const app = koa();
const dbg = debug('app');

/**
 * Koa错误处理
 */


// ========================================================
//  测试环境webpack的集成
// ========================================================
if (app.env === 'development') {
  webpack(app);
}

// ========================================================
//  Koa日志的中间件集成
// ========================================================
app.use(logger());

// ========================================================
//  Koa日志中间件集成
// ========================================================
app.context.render = render({
  root: path.join(__dirname, 'views'),
  autoescape: true,
  cache: app.env === 'development' ? false : 'memory', // disable, set to false
  ext: 'html',
});

// ========================================================
//  Koa静态资源中间件集成
// ========================================================
app.use(require('koa-static')(path.join(__dirname, '../build')));
app.use(require('koa-static')(path.join(__dirname, '../public')));

// ========================================================
//  Koa路由中间件集成
// ========================================================
app.use(routes());

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  if (process.send) process.send('online');
  dbg(`listening on PORT: ${PORT}`);
});
