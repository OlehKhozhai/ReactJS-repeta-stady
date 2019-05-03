import React, { Component } from 'react';

class Home extends Component {
  state = {};

  render() {
    const { title } = this.props;
    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default Home;
