import * as types from '../constants/ActionTypes';

export function fetchTodos(filter){
  return {
    type:types.FETCH_TODOS_REQUEST,
    filter
  }
}
