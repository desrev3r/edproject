import React, { Fragment } from 'react';
import UserLogOut from '../components/User/Logout';

export const LogOutView = ({ history }) => {
  return (
    <Fragment>
      <UserLogOut history={history} />
    </Fragment>
  );
};
