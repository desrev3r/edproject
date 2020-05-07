import axios from 'axios';
import { authenticationService } from '../../services/authentication';

import {
  GET_USER_STARTED,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from './types';

export const getUser = () => async (dispatch) => {
  dispatch(getUserStarted());

  try {
    const token = authenticationService.currentUser().token;
    const profile = await axios.get('/api/profile/me', {
      headers: { 'x-auth-token': token },
    });
    dispatch(getUserSuccess(profile.data));
  } catch (err) {
    dispatch(getUserFailure(err.message));
  }
};

const getUserStarted = () => ({
  type: GET_USER_STARTED,
});

const getUserSuccess = (profile) => ({
  type: GET_USER_SUCCESS,
  payload: {
    ...profile,
  },
});

const getUserFailure = (error) => ({
  type: GET_USER_FAILURE,
  payload: {
    error,
  },
});
