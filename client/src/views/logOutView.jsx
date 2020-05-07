import React, { Fragment } from 'react';
import { authenticationService } from '../services/authentication';
import UserLogOut from '../components/User/Logout';

export const LogOutView = ({ history }) => {
  return (
    <Fragment>
      <UserLogOut history={history} />
    </Fragment>
  );
};
