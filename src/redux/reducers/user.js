import { LOGIN, LOGOUT, GET_USER } from '../actions/user';

export default function reducer(state = null, action) {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem('user', JSON.stringify(action.result.data));
      return action.result.data;
    case LOGOUT:
      localStorage.removeItem('user');
      return null;
    case GET_USER:
      return action.data;
    default:
      return state;
  }
}