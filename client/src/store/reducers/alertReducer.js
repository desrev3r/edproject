import { SET_ALERT, REMOVE_ALERT } from '../constants/types';

const initialState = [];

export const alert = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_ALERT:
      return [payload];
    case REMOVE_ALERT:
      return [...initialState];

    default:
      return state;
  }
};
