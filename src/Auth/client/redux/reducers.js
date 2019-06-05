import { combineReducers } from 'redux';
import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  LOGOUT,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  REFRESH_USER_SUCCESS,
  REFRESH_USER_ERROR
} from './types';

const user = (state = null, { payload, type }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
    case REFRESH_USER_SUCCESS:
      return payload.user;
    case SIGN_UP_ERROR:
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

const isAuthenticated = (state = false, { type }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
    case REFRESH_USER_SUCCESS:
      return true;
    case SIGN_UP_ERROR:
    case LOGOUT:
    case REFRESH_USER_ERROR:
      return false;
    default:
      return state;
  }
};

const token = (state = null, { payload, type }) => {
  switch (type) {
    case SIGN_UP_SUCCESS:
    case LOGIN_SUCCESS:
      return payload.token;
    case SIGN_UP_ERROR:
    case LOGIN_ERROR:
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

const error = (state = null, { payload, type }) => {
  switch (type) {
    case SIGN_UP_ERROR:
    case LOGIN_ERROR:
    case REFRESH_USER_ERROR:
      return payload;
    case LOGOUT:
      return null;
    default:
      return state;
  }
};

export default combineReducers({
  user,
  isAuthenticated,
  token,
  error,
});
