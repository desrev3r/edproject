import React, { Fragment } from 'react';
import { isAuthorized } from '../services/access';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

import SignupForm from '../components/SignupForm';

export const SignupView = ({ history }) => {
  if (isAuthorized()) {
    history.push('/');
  }

  return (
    <Fragment>
      <Header title="Регистрация" />
      <Content>
        <SignupForm history={history} />
      </Content>
    </Fragment>
  );
};
