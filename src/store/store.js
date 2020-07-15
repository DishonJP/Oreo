import homeReducer from '../reducer/homeReducer';
import { createStore,applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

const store = createStore(homeReducer,applyMiddleware(thunk,logger));

export default store;