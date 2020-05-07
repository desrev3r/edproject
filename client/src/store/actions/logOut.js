import { USER_LOGOUT } from './types';

export const logOut = () => {
  return {
    type: USER_LOGOUT,
  };
};
