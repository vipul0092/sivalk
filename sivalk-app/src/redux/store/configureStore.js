import { createStore, applyMiddleware } from 'redux';
import rootReducers from '../reducers/root-reducer';
import thunk from 'redux-thunk';

let appInitialState = {};
let store = createStore(
    rootReducers,
    appInitialState,
    applyMiddleware(thunk));

export default store;