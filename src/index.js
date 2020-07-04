import React from 'react'
import ReactDom from 'react-dom'
import App from './App';
import { Provider } from 'react-redux'
import '../scss/app.scss'
import store from './store/store'

ReactDom.render(
    <Provider store={store}><App /></Provider>,
    document.getElementById('app')
);