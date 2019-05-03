import React, { Component } from 'react';

class UserProfile extends Component {
  state = {};

  render() {
    const { user, SignOut } = this.props;
    return (
      <div>
        <p>User name: {user}</p>
        <button type="button" onClick={SignOut}>
          SignOut
        </button>
      </div>
    );
  }
}

export default UserProfile;
