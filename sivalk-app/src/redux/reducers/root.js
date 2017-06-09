import { combineReducers } from 'redux';
import userReducers from './user';
import chatReducers from './chat';

export default combineReducers(
    Object.assign({}, userReducers, chatReducers)
);