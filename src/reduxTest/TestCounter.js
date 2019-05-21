import React, { Component } from 'react';
import { connect } from 'react-redux';
import { increment } from './testActions';

class TestCounter extends Component {
  state = {};

  render() {
    const { value, increment } = this.props;
    return (
      <div>
        <h1>{value}</h1>
        <button type="button" onClick={() => increment(1)}>
          plus
        </button>
      </div>
    );
  }
}
const mapStateToProps = state => ({ value: state });
const dispatchActions = { increment };

export default connect(
  mapStateToProps,
  dispatchActions,
)(TestCounter);
