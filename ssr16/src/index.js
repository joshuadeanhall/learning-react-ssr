import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
require('es6-promise').polyfill();

var predictions = [];
predictions.push({'date': 'today', 'value': '100'});
predictions.push({'date': 'tomorrow', 'value': '10000'});
ReactDOM.hydrate(<App showExtra={true} predictions={predictions} />, document.getElementById('root'));
registerServiceWorker();
