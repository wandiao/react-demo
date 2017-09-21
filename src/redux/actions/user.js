import axios from 'axios';

export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const GET_USER = 'GET_USER';

export function login() {
  return {
    type: LOGIN,
    promise() {
      return axios.get('/static/mock/login.json');
    },
  };
}

export function logout() {
  return { type: LOGOUT };
}

export function getUser(data) {
  return { type: GET_USER, data };
}