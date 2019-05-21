import { combineReducers } from 'redux';
import NotesReducer from './ToDoReducer';

export default combineReducers({ notes: NotesReducer });
