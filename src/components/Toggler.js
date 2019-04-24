import React, { Component } from 'react';

class Toggler extends Component {
  state = { on: true };

  toggle = () =>
    this.setState(state => ({
      on: !state.on,
    }));

  render() {
    return this.props.children({ on: this.state.on, toggle: this.toggle });
  }
}

export default Toggler;
