import { combineReducers } from 'redux';
import { alert } from './alertReducer';
import { user } from './userReducer';

export const rootReducer = combineReducers({ alert, user });
