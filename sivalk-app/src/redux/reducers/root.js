import { combineReducers } from 'redux';
import userReducers from './user';

export default combineReducers(
    Object.assign({}, userReducers)
);