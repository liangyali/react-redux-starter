import axios from 'axios';
import Cookies from 'js-cookie';
import {
  RECEIVE_AUTHED_USER
}
from '../constants/ActionTypes';

const COOKIE_PATH = 'accessToken';

function receiveAuthedUser(user) {
  return {
    type: RECEIVE_AUTHED_USER,
    user
  };
}

function fetchAuthedUser() {
  return dispatch => axios({
    url: '/user',
  }).then(resp => dispatch(receiveAuthedUser(resp.data)));
}

export function initAuth() {
  return dispatch => {
    const accessToken = Cookies.get(COOKIE_PATH);
    if (accessToken) {
      dispatch(fetchAuthedUser());
    }
    return null;
  };
}

export function loginUser(user) {
  return dispatch => {
    // 通过用户名和密码进行accessToken的换取
    axios({
      method: 'POST',
      url: '/auth',
      data: user
    }).then(resp => {
      Cookies.set(COOKIE_PATH, resp.data.accessToken);

      // 通过注入axios进行全局处理
      axios.interceptors.request.use((config) => {
        return {
          ...config,
          headers: {
            token: resp.data.accessToken
          }
        };
      }, (error) => Promise.reject(error));

      dispatch(fetchAuthedUser());
    });
  };
}
