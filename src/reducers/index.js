import {
  combineReducers
}
from 'redux';
import authed from './authed';
import {
  reducer as formReducer
}
from 'redux-form';
import {
  routerReducer
}
from 'react-router-redux';

const rootReducer = combineReducers({
  authed,
  form: formReducer,
  routing: routerReducer
});

export default rootReducer;
