import {render} from 'react-dom';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {Provider} from 'react-redux';
import React from 'react';
import configureStore from './store/configureStore';
import {App} from './containers';
import {todos} from './reducers';
import thunk from 'redux-thunk';

let createStoreWithMiddleware = applyMiddleware(thunk)(configureStore)
const reducers = combineReducers({todos});

const store = createStoreWithMiddleware(reducers);

render(
  <Provider store={store}><App/></Provider>, document.getElementById('root'));
