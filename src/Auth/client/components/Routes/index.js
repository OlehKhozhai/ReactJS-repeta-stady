import React from 'react';
import { Route, Switch } from 'react-router-dom';
import SignUp from '../Signup';
import Login from '../Login';
import Profile from '../Profile';
import Home from '../Home';
import PrivateRoute from './PrivateRoute';
import GuestRoute from './GuestRoute';

const MainRoutes = () => (
  <Switch>
    <PrivateRoute path="/profile" component={Profile} />

    <GuestRoute path="/sing-up" component={SignUp} />
    <GuestRoute path="/login" component={Login} />
    <GuestRoute path="/home" component={Home} />
  </Switch>
);
export default MainRoutes;
