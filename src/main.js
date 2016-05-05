import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import React from 'react';

import configureStore from './store/configureStore';
import {App, Detail} from './containers';
import reducers from './reducers';

import PageNotFound from './components/PageNotFound';

const store = configureStore(reducers, {}, window.devToolsExtension
  ? window.devToolsExtension()
  : undefined);

render(
  <Provider store={store}>
  <Router history={browserHistory}>
    <Route path="/app">
      <Route path="detail/:id" component={Detail}/>
      <IndexRoute component={App}/>
    </Route>
    <Route path="*" component={PageNotFound}/>
  </Router>
</Provider>, document.getElementById('root'));
