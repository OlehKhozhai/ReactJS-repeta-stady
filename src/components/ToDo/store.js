import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const thunk = ({ dispatch, getState }) => next => action =>
  typeof action === 'function' ? action(dispatch, getState) : next(action);

const middleware = applyMiddleware(thunk);
const enhancer = composeWithDevTools(middleware);
const store = createStore(rootReducer, enhancer);

export default store;
