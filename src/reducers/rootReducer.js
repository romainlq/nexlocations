import { combineReducers } from 'redux';
import user from './userReducer';
import consultants from './consultantsReducer';

export default combineReducers({
  user,
  consultants
});
