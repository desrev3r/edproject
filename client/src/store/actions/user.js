import axios from 'axios';
import { authenticationService } from '../../services/authentication';

import {
  GET_USER_STARTED,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  RESET_USER,
} from '../constants/types';

export const getUser = () => async (dispatch) => {
  dispatch({
    type: GET_USER_STARTED,
  });

  try {
    const token = authenticationService.currentUser().token;
    const profile = await axios.get('/api/profile/me', {
      headers: { 'x-auth-token': token },
    });
    dispatch({
      type: GET_USER_SUCCESS,
      payload: {
        ...profile.data,
      },
    });
  } catch (err) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: {
        error: err.message,
      },
    });
  }
};

export const resetUser = () => {
  return {
    type: RESET_USER,
  };
};

/*
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

*/
