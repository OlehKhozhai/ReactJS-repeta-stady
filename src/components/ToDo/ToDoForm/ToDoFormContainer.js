import { connect } from 'react-redux';
import { addNote } from '../ToDoNotesOperations';
import ToDoForm from './ToDoForm';

const mapDispatchToProps = { addNote };
export default connect(
  null,
  mapDispatchToProps,
)(ToDoForm);
