import React, { Fragment } from 'react';

import { Content } from '../components/layout/content';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

import SignupForm from '../components/SignupForm';

export const SignupView = () => (
  <Fragment>
    <Header title="Регистрация" />
    <Content>
      <SignupForm />
    </Content>
  </Fragment>
);
