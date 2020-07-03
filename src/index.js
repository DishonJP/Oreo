import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import '../scss/app.scss'
import homeReducer from './store/reducer/homeReducer';

const store = createStore(homeReducer);

ReactDom.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
);