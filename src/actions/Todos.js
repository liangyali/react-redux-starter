import axios from 'axios';
import {
  FETCH_TODOS_REQUEST,
  FETCH_TODOS_SUCCESS,
  FETCH_TODOS_FAILURE
}
from '../constants/ActionTypes';

export function fetchTodos() {
  return (dispatch) => {
    // TODO: Cache to local

    dispatch({
      type: FETCH_TODOS_REQUEST
    });
    axios({
      url: '/todos'
    }).then(
      resp => dispatch({
        items: [],
        type: FETCH_TODOS_SUCCESS,
        payload: resp.data,
      }),
      error => dispatch({
        type: FETCH_TODOS_FAILURE,
        error,
      })
    );
  };
}
