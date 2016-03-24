import { createReducer } from 'redux-create-reducer';

//default return state
export const todos = createReducer({},{
  ['FETCH_ALL'](state,action){
    console.log(state);
    return {...state, todos:[...state.todos||[],...action.todos]||[{text:'text'}]}
  },
  ['FETCH_SUCCESS'](state,action){
    return {...state,isFeting:true}
  }
});
