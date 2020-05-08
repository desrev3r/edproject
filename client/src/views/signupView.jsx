import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';
import SignupForm from '../components/SignupForm';

export const SignupView = ({ history }) => {
  return (
    <Fragment>
      <FadeIn>
        <Header title="Регистрация" />
        <Content>
          <SignupForm history={history} />
        </Content>
      </FadeIn>
    </Fragment>
  );
};
