import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import { Content } from './../../components/layout/Content';
import { Header } from './../../components/layout/Header';
import ProfileList from './../../components/Profile/List';

export const DashboardStudentsView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Студенты" />
      <Content>
        <ProfileList />
      </Content>
    </FadeIn>
  </Fragment>
);
