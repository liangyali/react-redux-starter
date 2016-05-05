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

  router.all('/auth', function*() {
    this.body = {
      status: 200,
      accessToken: 'test'
    };
  });

  router.all('/user', function*() {
    this.body = {
      name: 'liangyali',
      age: 32
    };
  });

  return router.routes();
};
