import { combineReducers } from 'redux';
import { alert } from './alertReducer';
import { user } from './userReducer';
import { logOut } from './logOutReducer';

export const rootReducer = combineReducers({ alert, user, logOut });
