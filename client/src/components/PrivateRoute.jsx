import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import { Role } from './../helpers/roles';
import authenticationService from './../services/authentication';
import accessService from './../services/access';

export const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        // Conditional rendering on role Admin/User
        if (roles && authenticationService.isLogin()) {
          switch (roles) {
            case Role.Admin:
              if (!accessService.isAdmin()) {
                return <Redirect to={{ pathname: '/' }} />;
              } else {
                return <Component {...props} />;
              }
            case Role.User:
              return <Component {...props} />;
            default:
              return <Component {...props} />;
          }
        }

        return (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        );
      }}
    />
  );
};
