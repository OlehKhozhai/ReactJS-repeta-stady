import {
  ADD_NOTE_SUCCESS,
  ADD_NOTE_ERROR,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_ERROR,
  COMPLETED_NOTE_SUCCESS,
  COMPLETED_NOTE_ERROR,
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_ERROR,
  FILTER_NOTES,
} from './ToDoTypes';

const fetchRequest = () => ({ type: FETCH_REQUEST });
const fetchSuccess = notes => ({ type: FETCH_SUCCESS, payload: notes });
const fetchError = error => ({ type: FETCH_ERROR, payload: error });

const addNoteSuccess = text => ({ type: ADD_NOTE_SUCCESS, payload: text });
const addNoteError = error => ({ type: ADD_NOTE_ERROR, payload: error });

const deleteNoteSuccess = id => ({ type: DELETE_NOTE_SUCCESS, payload: id });
const deleteNoteError = error => ({ type: DELETE_NOTE_ERROR, payload: error });

const completedNoteSuccess = id => ({ type: COMPLETED_NOTE_SUCCESS, payload: id });
const completedNoteError = error => ({ type: COMPLETED_NOTE_ERROR, payload: error });

const filterNotes = value => ({ type: FILTER_NOTES, payload: value });

export {
  fetchRequest,
  fetchSuccess,
  fetchError,
  addNoteSuccess,
  addNoteError,
  deleteNoteSuccess,
  deleteNoteError,
  completedNoteSuccess,
  completedNoteError,
  filterNotes,
};
