import React, { Fragment} from 'react';

import { Content } from '../components/layout/content';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

import AuthForm from '../components/AuthForm';

export const AuthView = () => (
  <Fragment>
    <Header title="Авторизация" />
    <Content>
      <AuthForm />
    </Content>
  </Fragment>
);
