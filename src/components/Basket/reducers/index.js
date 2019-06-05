import { combineReducers } from 'redux';

import BasketReducer from './BasketReducer';
import ProductReducer from './ProductReducer';
import entityReducer from './entityReducer';

export default combineReducers({
  basket: BasketReducer,
  products: ProductReducer,
  entities: entityReducer,
});
