import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import adminsReducer from './adminsReducer';

const reducers = combineReducers({
  auth: authReducer,
  admins: adminsReducer,
  users: usersReducer,
});

export default reducers;
