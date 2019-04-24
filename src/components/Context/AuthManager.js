import React from 'react';
import { Consumer } from './MainContext';
const AuthManager = () => (
  <Consumer>{authCon => <div>{JSON.stringify(authCon, null, 2)}</div>}</Consumer>
);

export default AuthManager;
