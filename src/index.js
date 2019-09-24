import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App/App';
import Store from './redux/Store';
import {Provider} from 'react-redux';

ReactDOM.render(
    <Provider store={Store}>
        <App/>
    </Provider>
, document.getElementById('root'));
