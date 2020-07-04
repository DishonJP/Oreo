import homeReducer from '../reducer/homeReducer';
import { createStore } from 'redux'

const store = createStore(homeReducer);

export default store;