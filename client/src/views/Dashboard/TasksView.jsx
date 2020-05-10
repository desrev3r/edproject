import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import { Content } from './../../components/layout/Content';
import { Header } from './../../components/layout/Header';
import TaskList from './../../components/Task/List';

export const DashboardTasksView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Задачи" />
      <Content>
        <TaskList />
      </Content>
    </FadeIn>
  </Fragment>
);
