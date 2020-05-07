import { USER_LOGOUT } from '../constants/types';

export const logOut = () => {
  return {
    type: USER_LOGOUT,
  };
};
