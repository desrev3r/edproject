import React, { Fragment } from 'react';

import { Content } from '../components/layout/content';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';
import { AccountInfo } from '../components/Account/info';

export const AccountView = () => (
  <Fragment>
    <Header title="Личный кабинет" />
    <Content>
      <AccountInfo />
    </Content>
  </Fragment>
);
