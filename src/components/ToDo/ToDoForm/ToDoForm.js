import React, { Component } from 'react';

class ToDoForm extends Component {
  state = { text: '' };

  handleChange = e => {
    this.setState({ text: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { addNote } = this.props;
    const { text } = this.state;

    addNote(text);
    this.setState({ text: '' });
  };

  render() {
    const { text } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" onChange={this.handleChange} value={text} />
        <button type="submit">add</button>
      </form>
    );
  }
}

export default ToDoForm;
