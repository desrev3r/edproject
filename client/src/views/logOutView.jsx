import React, { Fragment } from 'react';
import { authenticationService } from '../services/authentication';
import UserLogOut from '../components/User/Logout';

export const LogOutView = ({ history }) => {
  // if (authenticationService.logout()) {
  //   history.push('/');
  // }

  console.log('LOG OUT???');

  return (
    <Fragment>
      <UserLogOut history={history}/>
    </Fragment>
  );
};
