import TypesTest from './testTypes';

const increment = value => ({ type: TypesTest.INCREMENT, payload: value });

export { increment };
