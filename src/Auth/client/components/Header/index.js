import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import LogoutButton from './LogoutButton';

class Header extends Component {
  render() {
    const { isAuthenticated, user } = this.props;
    return (
      <header>
        {isAuthenticated ? (
          <>
            <NavLink to="/profile">Profile</NavLink>
            <LogoutButton />
            <span>{user.name}</span>
          </>
        ) : (
          <>
            <NavLink to="/sing-up">SignUp</NavLink>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/home">Home</NavLink>
          </>
        )}
      </header>
    );
  }
}

const mapStateToProp = ({ session: { isAuthenticated, user } }) => ({ isAuthenticated, user });
export default connect(mapStateToProp)(Header);
