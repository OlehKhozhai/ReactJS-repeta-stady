import React, { Component } from 'react';
class UserProfile extends Component {
  render() {
    const { name, year } = this.props;
    return (
      <div>
        <p>User name: {name}</p>
        <p>User year: {year}</p>
      </div>
    );
  }
}

export default UserProfile;
