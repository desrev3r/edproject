import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { isAuthorized } from '../services/access';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

import AuthForm from '../components/AuthForm';
import { Redirect } from 'react-router-dom';

export const AuthView = ({ history }) => {
  return (
    <Fragment>
      <FadeIn>
        <Header title="Авторизация" />
        <Content>
          <AuthForm history={history} />
        </Content>
      </FadeIn>
    </Fragment>
  );
};
