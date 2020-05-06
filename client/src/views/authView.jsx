import React, { Fragment } from 'react';
import { isAuthorized } from '../services/access';

import { Content } from '../components/layout/content';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

import AuthForm from '../components/AuthForm/';
import { Redirect } from 'react-router-dom';

export const AuthView = ({ history }) => {;

  return (
    <Fragment>
      <Header title="Авторизация" />
      <Content>
        <AuthForm />
      </Content>
    </Fragment>
  );
};
