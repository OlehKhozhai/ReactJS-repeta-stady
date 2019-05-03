import React, { Component, createContext } from 'react';

const AuthContext = createContext({
  isAuth: true,
  user: {},
  SignIn: () => null,
  SignOut: () => null,
});
export { AuthContext };

class AuthContextProvider extends Component {
  state = { isAuth: false, user: null };

  SignIn = () => {
    this.setState({ isAuth: true, user: 'testttt' });
  };

  SignOut = () => {
    this.setState({ isAuth: false, user: null });
  };

  render() {
    const { isAuth, user } = this.state;
    const { children } = this.props;
    return (
      <AuthContext.Provider
        value={{
          isAuth,
          user,
          SignIn: this.SignIn,
          SignOut: this.SignOut,
        }}
      >
        {children}
      </AuthContext.Provider>
    );
  }
}

export default AuthContextProvider;
