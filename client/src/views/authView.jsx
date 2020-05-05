import React, { Fragment } from 'react';
import { isAuthorized } from '../services/access';

import { Content } from '../components/layout/content';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

import AuthForm from '../components/AuthForm/';

export const AuthView = ({history}) => {
  if (isAuthorized()) {
    history.push('/');
  }

  return (
    <Fragment>
      <Header title="Авторизация" />
      <Content>
        <AuthForm />
      </Content>
    </Fragment>
  );
};
