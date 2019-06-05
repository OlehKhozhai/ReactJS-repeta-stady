import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../../redux/operations';

const initialValue = { email: '', password: '' };

class Login extends Component {
  state = { ...initialValue };

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  onSubmit = e => {
    e.preventDefault();

    const { onLogin } = this.props;
    onLogin({ ...this.state });

    this.setState({ ...initialValue });
  };

  render() {
    const { email, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Page</h1>
        <input
          type="text"
          onChange={this.handleChange}
          value={email}
          name="email"
          autoComplete="off"
        />
        <input
          type="password"
          onChange={this.handleChange}
          value={password}
          name="password"
          autoComplete="off"
        />
        <button type="submit">SING UP</button>
      </form>
    );
  }
}
const mapDispatch = { onLogin: login };
export default connect(
  null,
  mapDispatch,
)(Login);
