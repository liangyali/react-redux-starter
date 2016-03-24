import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'react-redux';

export default function configureStore(reducers,initialState={}){
  return  createStore(reducers,initialState,window.devToolsExtension ? window.devToolsExtension() : undefined);
}
