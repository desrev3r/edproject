import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const DashboardView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Панель управления" />
      <Content>#AdminAccess</Content>
    </FadeIn>
  </Fragment>
);
