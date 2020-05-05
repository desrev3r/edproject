import React, { Fragment } from 'react';

import { Content } from '../components/layout/content';
import { Header } from '../components/layout/header';
import { Footer } from '../components/layout/footer';

export const DashboardView = () => (
  <Fragment>
    <Header title="Панель управления" />
    <Content>
      #AdminAccess
    </Content>
  </Fragment>
);
