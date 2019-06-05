import axios from 'axios';
import { setAuthToken } from '../config/axiosConfig';
import {
  signUpRequest,
  signUpSuccess,
  signUpError,
  loginRequest,
  loginError,
  loginSuccess,
  refreshUserSuccess,
  refreshUserError,
} from './actions';

export const signUp = credentials => dispatch => {
  dispatch(signUpRequest());
  axios
    .post('sign-up', credentials)
    .then(({ data }) => dispatch(signUpSuccess(data)))
    .catch(({ response: { data } }) => dispatch(signUpError(data)));
};

export const login = credentials => dispatch => {
  console.log(credentials);
  dispatch(loginRequest());
  axios
    .post('sign-in', credentials)
    .then(({ data }) => dispatch(loginSuccess(data)))
    .catch(({ response: { data } }) => dispatch(loginError(data)));
};

export const refreshUser = () => (dispatch, getState) => {
  const { token } = getState().session;
  if (!token) return;
  setAuthToken(token);
  axios
    .get('sign-in/user')
    .then(({ data }) => dispatch(refreshUserSuccess(data)))
    .catch(error => dispatch(refreshUserError(error)));
};
