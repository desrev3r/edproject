import React, { Fragment } from 'react';
import { isAuthorized } from '../services/access';

import { Content } from '../components/layout/content';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

import SignupForm from '../components/SignupForm/';

export const SignupView = ({history}) => {
  if (isAuthorized()) {
    history.push('/');
  }

  return (
    <Fragment>
      <Header title="Регистрация" />
      <Content>
        <SignupForm />
      </Content>
    </Fragment>
  );
};
