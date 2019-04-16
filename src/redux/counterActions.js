import { ACTION_TYPES } from './actionsTypes';

const increment = value => ({
  type: ACTION_TYPES.INCREMENT,
  payload: value,
});
const decrement = value => ({
  type: ACTION_TYPES.DECREMENT,
  payload: value,
});
const reset = value => ({
  type: ACTION_TYPES.RESET,
  payload: value,
});

export { increment, decrement, reset };
