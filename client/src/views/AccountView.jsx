import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import { Content } from './../components/layout/Content';
import { Header } from './../components/layout/Header';
import AccountInfo from './../components/Account/Info';

export const AccountView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Личный кабинет" />
      <Content>
        <AccountInfo />
      </Content>
    </FadeIn>
  </Fragment>
);
