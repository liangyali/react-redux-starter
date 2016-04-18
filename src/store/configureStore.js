import {
  createStore,
  applyMiddleware,
  compose
} from 'redux';
import thunk from 'redux-thunk';

const middlewares = [thunk]

// export default function configureStore(reducers, initialState = {}) {
//   return createStore(reducers, initialState, compose(thunk));
// }
//
export default applyMiddleware(thunk)(createStore);
