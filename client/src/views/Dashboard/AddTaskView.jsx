import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import { Content } from './../../components/layout/Content.jsx';
import { Header } from './../../components/layout/Header';

import { FlexBlock } from './../../components/layout/FlexBlock';
import { Block } from './../../components/layout/Block';
import { Button } from '././../../components/generic/Button';

export const DashboardAddTaskView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Добавление задачи" />
      <Content>
        Здесь Вы можете добавить новую задачу...
      </Content>
    </FadeIn>
  </Fragment>
);
