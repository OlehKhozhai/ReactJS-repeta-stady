import { connect } from 'react-redux';
import React, { Component } from 'react';
import { fetchNotes, deleteNote, completedNote } from './ToDoNotesOperations';
import ToDo from './ToDo';

class ToDoContainer extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return <ToDo {...this.props} />;
  }
}

const mapStateToProps = ({ notes }) => ({
  notes: notes.items.filter(({ text }) => text.includes(notes.filter)),
});

const mapDispatchToProps = { deleteNote, fetchNotes, completedNote };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoContainer);
