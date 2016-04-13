import {
  createReducer
} from 'redux-create-reducer';
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
} from '../constants/ActionTypes';

//default return state
export const todos = createReducer({}, {
  [FETCH_TODOS_REQUEST](state, action) {
    return {...state,
      isFeting:true
    }
  },
  [FETCH_TODOS_SUCCESS](state, action) {
    return {...state,
      isFeting: false,
      items:action.payload,
      updatedAt:+new Date()
    }
  },
  [FETCH_TODOS_FAILURE](state,action){
    return {
      ...state,
      error:action.error
    }
  }
});
