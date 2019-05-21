import { connect } from 'react-redux';
import { filterNotes } from '../ToDoAction';
import ToDoSearch from './ToDoSearch';

const mapStateToProps = state => ({ value: state.notes.filter });
const mapDispatchToProps = { onChange: filterNotes };
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ToDoSearch);
