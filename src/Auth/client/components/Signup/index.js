import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signUp } from '../../redux/operations';

const initialValue = { name: '', email: '', password: '' };

class SignUp extends Component {
  state = { ...initialValue };

  handleChange = ({ target: { name, value } }) => this.setState({ [name]: value });

  onSubmit = e => {
    e.preventDefault();

    const { onSignUp } = this.props;
    onSignUp({ ...this.state });

    this.setState({ ...initialValue });
  };

  render() {
    const { name, email, password } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <h1>SignUp Page</h1>

        <input
          type="text"
          onChange={this.handleChange}
          value={name}
          name="name"
          placeholder="name"
        />
        <input
          type="text"
          onChange={this.handleChange}
          value={email}
          name="email"
          placeholder="email"
        />
        <input
          type="password"
          onChange={this.handleChange}
          value={password}
          name="password"
          placeholder="password"
        />
        <button type="submit">SING UP</button>
      </form>
    );
  }
}
const mapDispatch = { onSignUp: signUp };
export default connect(
  null,
  mapDispatch,
)(SignUp);
