import TypesTest from './testTypes';

const initialState = 0;

const testReducer = (state = initialState, action) => {
  if (action.type === TypesTest.INCREMENT) {
    return state + action.payload;
  }
  return state;
};
export default testReducer;
