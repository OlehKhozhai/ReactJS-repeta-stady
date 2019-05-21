import axios from 'axios';
import {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addNoteSuccess,
  addNoteError,
  deleteNoteSuccess,
  deleteNoteError,
  completedNoteSuccess,
  completedNoteError,
} from './ToDoAction';

const fetchNotes = () => dispatch => {
  dispatch(fetchRequest());
  axios
    .get('http://localhost:3000/notes')
    .then(res => dispatch(fetchSuccess(res.data)))
    .catch(error => dispatch(fetchError(error)));
};

const addNote = text => dispatch => {
  axios
    .post('http://localhost:3000/notes', { text, completed: false })
    .then(res => dispatch(addNoteSuccess(res.data)))
    .catch(error => dispatch(addNoteError(error)));
};

const deleteNote = id => dispatch => {
  axios
    .delete(`http://localhost:3000/notes/${id}`)
    .then(() => dispatch(deleteNoteSuccess(id)))
    .catch(error => dispatch(deleteNoteError(error)));
};

const completedNote = (id, completed) => dispatch => {
  axios
    .patch(`http://localhost:3000/notes/${id}`, { completed })
    .then(() => dispatch(completedNoteSuccess(id)))
    .catch(error => dispatch(completedNoteError(error)));
};

export { fetchNotes, addNote, deleteNote, completedNote };
