import axios from 'axios';
import { authenticationService } from '../../services/authentication';

import {
  GET_PROFILE_STARTED,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from './types';

export const getProfile = () => async (dispatch) => {
  dispatch(getProfileStarted());

  try {
    const token = authenticationService.currentUser().token;
    const profile = await axios.get('/api/profile/me', {
      headers: { 'x-auth-token': token },
    });
    dispatch(getProfileSuccess(profile.data));
  } catch (err) {
    dispatch(getProfileFailure(err.message));
  }
};

const getProfileStarted = () => ({
  type: GET_PROFILE_STARTED,
});

const getProfileSuccess = (profile) => ({
  type: GET_PROFILE_SUCCESS,
  payload: {
    ...profile,
  },
});

const getProfileFailure = (error) => ({
  type: GET_PROFILE_FAILURE,
  payload: {
    error,
  },
});
