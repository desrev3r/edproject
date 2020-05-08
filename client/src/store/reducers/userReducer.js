import {
  GET_USER_STARTED,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  RESET_USER,
} from '../constants/types';

import authenticationService from '../../services/authentication';
import { defaultUser } from '../constants/defaultUser';

const initialState = defaultUser;

export const user = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_USER_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_USER_SUCCESS:
      const {
        user: { _id, name, email, isAdmin },
        experience,
        avatar,
      } = payload;

      return {
        ...state,
        id: _id,
        name,
        email,
        avatar,
        tasks: experience.tasks,
        total: experience.tasks.length,
        isAdmin,
        isLogin: authenticationService.isLogin(),
        isLoading: false,
        isError: null,
      };
    case GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
      };
    case RESET_USER:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
