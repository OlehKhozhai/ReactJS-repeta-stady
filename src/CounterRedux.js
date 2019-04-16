import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from './redux/counterActions';

const Counter = ({ value, increment, decrement, reset }) => (
  <div className="container">
    <h2>{value}</h2>
    <button onClick={increment} type="button" className="btn btn-primary">
      increment
    </button>
    <button onClick={decrement} type="button" className="btn btn-primary">
      decrement
    </button>
    <button onClick={reset} type="button" className="btn btn-primary">
      reset
    </button>
  </div>
);
const mapStateToProps = state => ({ value: state });
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(counterActions.increment(5)),
  decrement: () => dispatch(counterActions.decrement(5)),
  reset: () => dispatch(counterActions.reset()),
});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Counter);
