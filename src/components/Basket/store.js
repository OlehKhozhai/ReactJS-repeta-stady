import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';
import productArray from './products';

console.log(Object.keys(productArray));
const enhancer = composeWithDevTools();
const preloadState = {
  products: Object.keys(productArray),
  entities: { ...productArray },
};
const store = createStore(rootReducer, preloadState, enhancer);

export default store;
