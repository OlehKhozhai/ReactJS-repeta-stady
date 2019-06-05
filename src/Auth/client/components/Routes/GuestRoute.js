import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const GuestRoute = ({ component: Component, isAuthenticated, ...rest }) =>
  console.log({ ...rest }) || (
    <Route
      {...rest}
      render={props => (!isAuthenticated ? <Component {...props} /> : <Redirect to="/profile" />)}
    />
  );

export default connect(state => ({ isAuthenticated: state.session.isAuthenticated }))(GuestRoute);
