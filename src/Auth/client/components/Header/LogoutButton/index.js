import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logout } from '../../../redux/actions';

class LogoutButton extends Component {
  render() {
    const { onLogout } = this.props;
    return (
      <button type="button" onClick={() => console.log('logout') || onLogout()}>
        Logout
      </button>
    );
  }
}
const mapDispatchToProp = { onLogout: logout };
export default connect(
  null,
  mapDispatchToProp,
)(LogoutButton);
