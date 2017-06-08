import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/app-component';
import { Provider } from 'react-redux';
import store from './redux/store/configureStore';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

let rootElement = document.getElementById('app');
let rootMarkup = (
    <Provider store={store}>
        <AppComponent />
    </Provider>
);

ReactDOM.render(rootMarkup, rootElement);
