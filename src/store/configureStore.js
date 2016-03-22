import {createStore,applyMiddleware,combineReducers} from 'redux';
import {todos} from '../reducers';

const reducers = combineReducers({
  todos
});
export default function configureStore(initialState={}){
  return createStore(reducers,initialState);
}
