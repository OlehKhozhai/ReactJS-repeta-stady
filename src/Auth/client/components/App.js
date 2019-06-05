import React, { Component } from 'react';
import { connect } from 'react-redux';

import { withRouter } from 'react-router-dom';
import { refreshUser } from '../redux/operations';

import Header from './Header';
import MainRoutes from './Routes';

class App extends Component {
  componentDidMount() {
    const { onRefreshUser } = this.props;
    onRefreshUser();
  }

  render() {
    return (
      <div>
        <Header />
        <hr />
        <MainRoutes />
      </div>
    );
  }
}

export default withRouter(
  connect(
    state => ({ isAuthenticated: state.session.isAuthenticated }),
    { onRefreshUser: refreshUser },
  )(App),
);
