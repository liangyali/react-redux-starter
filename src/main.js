import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, useRouterHistory} from 'react-router';
import React from 'react';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import {syncHistoryWithStore} from 'react-router-redux';

import configureStore from './store/configureStore';
import {Login, App} from './containers';
import PageNotFound from './components/PageNotFound';

// ========================================================
// Browser History Setup
// ========================================================
const browserHistory = useRouterHistory(createBrowserHistory)({basename: '/app'});

// ========================================================
// Store and History Instantiation
// ========================================================
// Create redux store and sync with react-router-redux. We have installed the
// react-router-redux reducer under the routerKey "router" in src/routes/index.js,
// so we need to provide a custom `selectLocationState` to inform
// react-router-redux of its location.
const initialState = window.___INITIAL_STATE__;
const store = configureStore(initialState, browserHistory);
const history = syncHistoryWithStore(browserHistory, store);

// ========================================================
// Render Setup
// ========================================================
const MOUNT_NODE = document.getElementById('root');
ReactDOM.render(
  <Provider store={store}>
  <Router history={history}>
    <Route path="/">
      <Route path="login" component={Login}/>
      <IndexRoute component={App}/>
      <Route path="*" component={PageNotFound}/>
    </Route>
  </Router>
</Provider>, MOUNT_NODE);
