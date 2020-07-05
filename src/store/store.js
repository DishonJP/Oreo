import homeReducer from '../reducer/homeReducer';
import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'

const store = createStore(homeReducer,applyMiddleware(logger));

export default store;