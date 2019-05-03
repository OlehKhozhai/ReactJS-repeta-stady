// import React from 'react';
import React, { Component } from 'react';
import { AuthContext } from './AuthContext';
import UserProfile from './UserProfile';

// const AuthManager = () => (
//   <AuthContext.Consumer>
//     {({ isAuth, user, SignIn, SignOut }) =>
//       isAuth ? (
//         <UserProfile user={user} SignOut={SignOut} />
//       ) : (
//         <button type="button" onClick={SignIn}>
//           SignIn
//         </button>
//       )
//     }
//   </AuthContext.Consumer>
// );

// export default AuthManager;

class AuthManager extends Component {
  static contextType = AuthContext;

  state = {};

  render() {
    const { isAuth, user, SignIn, SignOut } = this.context;
    return (
      <div>
        {isAuth ? (
          <UserProfile user={user} SignOut={SignOut} />
        ) : (
          <button type="button" onClick={SignIn}>
            SignIn
          </button>
        )}
      </div>
    );
  }
}

export default AuthManager;
