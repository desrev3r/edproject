import {
  GET_USER_STARTED,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
} from '../actions/types';

const initialState = {
  isLoading: false,
  user: {},
  isError: null,
};

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
        user: { _id, name },
        experience,
        avatar,
      } = payload;
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
    case GET_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: payload.error,
      };
    default:
      return state;
  }
};
