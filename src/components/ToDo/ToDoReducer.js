import { combineReducers } from 'redux';
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

const notesReducer = (state = [], { type, payload }) => {
  switch (type) {
    case FETCH_SUCCESS:
      return payload;
    case ADD_NOTE_SUCCESS:
      return [...state, payload];
    case DELETE_NOTE_SUCCESS:
      return state.filter(item => item.id !== payload);
    case COMPLETED_NOTE_SUCCESS:
      return state.map(item =>
        item.id === payload ? { ...item, completed: !item.completed } : item,
      );
    default:
      return state;
  }
};

const filterReducer = (state = '', { type, payload }) => {
  switch (type) {
    case FILTER_NOTES:
      return payload;
    default:
      return state;
  }
};

const isLoadingReducer = (state = false, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return true;
    case FETCH_ERROR:
    case FETCH_SUCCESS:
      return true;
    default:
      return state;
  }
};

const errorReducer = (state = null, { type, payload }) => {
  switch (type) {
    case FETCH_REQUEST:
      return null;
    case FETCH_ERROR:
    case ADD_NOTE_ERROR:
    case COMPLETED_NOTE_ERROR:
    case DELETE_NOTE_ERROR:
      return payload;
    default:
      return state;
  }
};

export default combineReducers({
  items: notesReducer,
  filter: filterReducer,
  isLoading: isLoadingReducer,
  error: errorReducer,
});
