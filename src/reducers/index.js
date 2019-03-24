import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import userDetailsReducer from './userDetailsReducer';

export default combineReducers({
  users: usersReducer,
  userDetails: userDetailsReducer
});
