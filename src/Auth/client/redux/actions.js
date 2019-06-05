import {
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
  SIGN_UP_ERROR,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  REFRESH_USER_SUCCESS,
  REFRESH_USER_ERROR,
} from './types';

export const signUpRequest = () => ({ type: SIGN_UP_REQUEST, payload: true });

export const signUpSuccess = user => ({ type: SIGN_UP_SUCCESS, payload: user });

export const signUpError = error => ({ type: SIGN_UP_ERROR, payload: error });

export const loginRequest = () => ({ type: LOGIN_REQUEST, payload: true });

export const loginSuccess = user => ({ type: LOGIN_SUCCESS, payload: user });

export const loginError = error => ({ type: LOGIN_ERROR, payload: error });

export const logout = () => ({ type: LOGOUT, payload: null });

export const refreshUserSuccess = user => ({ type: REFRESH_USER_SUCCESS, payload: { user } });
export const refreshUserError = error => ({ type: REFRESH_USER_ERROR, payload: error });
