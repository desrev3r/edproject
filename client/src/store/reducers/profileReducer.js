import {
  GET_PROFILE_STARTED,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  profile: {},
  isError: null,
};

export const profile = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case GET_PROFILE_SUCCESS:
      const { user: {_id, name}, experience, avatar } = payload;
      return {
        ...state,
        id: _id,
        name,
        avatar,
        tasks: experience.tasks,
        total: experience.tasks.length,
        isLoading: false,
        isError: null,
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
      };
    default:
      return state;
  }
};
