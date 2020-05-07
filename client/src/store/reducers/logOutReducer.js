import { USER_LOGOUT } from '../actions/types';


const initialState = {
  loggedIn: false,
};


export const logOut = (state=initialState, action) => {
  const { type } = action;
  switch (type) {
    case USER_LOGOUT:
      console.log('USER_LOGOUT');
      state = undefined;
    default:
      return state;
  }
};
