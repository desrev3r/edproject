import { combineReducers } from 'redux';
import { alert } from './alertReducer'
import { profile } from './profileReducer'

export const rootReducer = combineReducers({alert, profile});
