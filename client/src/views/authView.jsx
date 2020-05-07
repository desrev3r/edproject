import React, { Fragment } from 'react';
import { isAuthorized } from '../services/access';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

import AuthForm from '../components/AuthForm';
import { Redirect } from 'react-router-dom';

export const AuthView = ({ history }) => {

  return (
    <Fragment>
      <Header title="Авторизация" />
      <Content>
        <AuthForm history={history}/>
      </Content>
    </Fragment>
  );
};
