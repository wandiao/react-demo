import { combineReducers } from 'redux';
import count from './count';
import user from './user';

export default combineReducers({
  count,
  user,
});