import { combineReducers } from 'redux';
import { ADD_TO_BASKET, REMOVE_PRODUCT_FROM_BASKET } from '../actions';

function ids(state = [], { payload, type }) {
  switch (type) {
    case ADD_TO_BASKET:
      return state.includes(payload.id) ? state : [...state, payload.id];
    case REMOVE_PRODUCT_FROM_BASKET:
      return state.filter(id => id !== payload.id);
    default:
      return state;
  }
}

function amounts(state = {}, { payload, type }) {
  switch (type) {
    case ADD_TO_BASKET:
      return { ...state, [payload.id]: state[payload.id] ? state[payload.id] + 1 : 1 };
    case REMOVE_PRODUCT_FROM_BASKET: {
      const { [payload.id]: _, ...newState } = state;
      return newState;
    }
    default:
      return state;
  }
}

export default combineReducers({ ids, amounts });
