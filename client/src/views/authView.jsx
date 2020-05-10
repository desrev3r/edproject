import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import { Content } from './../components/layout/Content';
import { Header } from './../components/layout/Header';

import AuthForm from './../components/AuthForm';

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
