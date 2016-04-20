import Router from 'koa-router';
import requireDir from 'require-dir';

const controllers = requireDir('./controllers');

export default () => {
  const router = new Router({
    prefix: ''
  });

  // index
  router.get('/app/*', controllers.home.index);
  router.get('/todos', controllers.todos.index);

  return router.routes();
};
