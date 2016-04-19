import { version } from '../../package.json';

export function* index() {
  yield this.render('home/index', {
    version,
  });
}
