import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import { Content } from './../../components/layout/Content.jsx';
import { Header } from './../../components/layout/Header';

export const DashboardAddTaskView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Добавление задачи" />
      <Content>
        Здесь Вы можете добавить новую задачу...
        <AiOutlineCloudDownload />
      </Content>
    </FadeIn>
  </Fragment>
);
