import { createStore } from 'redux';
import { counterReducer } from './counterReducers';

const store = createStore(counterReducer);
export default store;
