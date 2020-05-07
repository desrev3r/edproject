import { USER_LOGOUT } from '../constants/types';

const initialState = {
  user: {
    loggedIn: false,
    name: 'Гость',
    avatar: 'https://lovely-mebel.ru/template/img/default_avatar.png',
  },
};

export const logOut = (state = initialState, action) => {
  const { type } = action;
  switch (type) {
    case USER_LOGOUT:
      return state;
    default:
      return state;
  }
};
