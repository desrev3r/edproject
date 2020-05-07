import React, { Fragment } from 'react';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';
import AccountInfo from '../components/Account/Info';

export const AccountView = () => (
  <Fragment>
    <Header title="Личный кабинет" />
    <Content>
      <AccountInfo />
    </Content>
  </Fragment>
);
