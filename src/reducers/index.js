import { createReducer } from 'redux-create-reducer';

//default return state
export const todos = createReducer({},{
  ['FETCH_ALL'](state,action){
    return {...state,name:Math.random()}
  },
  ['FETCH_SUCCESS'](state,action){
    return {...state,isFeting:true}
  }
});
