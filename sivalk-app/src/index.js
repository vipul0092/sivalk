import React from 'react';
import ReactDOM from 'react-dom';
import AppComponent from './components/app-component';

import '../node_modules/bootstrap/dist/css/bootstrap.css';

let rootElement = document.getElementById('app');

ReactDOM.render(<AppComponent />, rootElement);
