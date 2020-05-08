import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';
import TaskList from '../components/Task/List';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';

export const TaskListView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Задачи" />
      <Content>
        <TaskList />
      </Content>
    </FadeIn>
  </Fragment>
);
