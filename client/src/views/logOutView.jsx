import React, { Fragment } from 'react';
import { authenticationService } from '../services/authentication';

export const LogOutView = ({ history }) => {
  if (authenticationService.logout()) {
    history.push('/');
  }

  return <Fragment></Fragment>;
};
