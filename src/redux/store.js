import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// import { counterReducer } from './counterReducers';

import testReducer from '../reduxTest/testReducers';

const store = createStore(testReducer, composeWithDevTools());
export default store;
