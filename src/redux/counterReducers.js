import { ACTION_TYPES } from './actionsTypes';

const initialState = 0;

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return state + action.payload;
    case ACTION_TYPES.DECREMENT:
      return state - action.payload;
    case ACTION_TYPES.RESET:
      return initialState;
    default:
      return state;
  }
};
export const OTHER_TYPES = '';
