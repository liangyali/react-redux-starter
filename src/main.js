import {render} from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from './store/configureStore';
import {App} from './containers';
import {todos} from './reducers';

const reducers = combineReducers({todos});

const store = configureStore(reducers);

render(
  <Provider store={store}><App/></Provider>, document.getElementById('root'));
