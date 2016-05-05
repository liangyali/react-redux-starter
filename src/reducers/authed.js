import {
  RECEIVE_AUTHED_USER
}
from '../constants/ActionTypes';

const initialState = {
  authed: false,
  user: {}
}

export default function(state = initialState, action) {
  switch (action.type) {
    case RECEIVE_AUTHED_USER:
      return {
        ...state,
        authed: true,
        user: action.user
      };
      break;
    default:
      return state;
  }
}
