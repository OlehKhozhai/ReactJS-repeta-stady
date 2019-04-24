import React, { Component, createContext } from 'react';
import UserProfile from './UserProfile';

export const { Provider, Consumer } = createContext({
  isAuth: false,
  user: {},
  SignIn: () => null,
  SignOut: () => null,
});

class MainContext extends Component {
  render() {
    return (
      <Provider
        value={{
          isAuth: false,
          user: { name: 'test' },
          SignIn: () => console.log('in'),
          SignOut: () => console.log('out'),
        }}
      >
        <UserProfile name="Oleh" year="1923" />
      </Provider>
    );
  }
}

export default MainContext;
