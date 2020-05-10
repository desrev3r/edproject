import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import { Content } from './../../components/layout/Content';
import { Header } from './../../components/layout/Header';
import { DashboardSectionNav } from './../../components/generic/Dashboard/SectionNav';
import { DashboardSectionCard } from './../../components/generic/Dashboard/SectionCard';

export const DashboardView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Панель управления" />
      <Content>
        <DashboardSectionNav>
          <DashboardSectionCard title="Задачи" url="tasks" />
          <DashboardSectionCard title="Темы" url="tasks" />
          <DashboardSectionCard title="Студенты" url="students" />
        </DashboardSectionNav>
      </Content>
    </FadeIn>
  </Fragment>
);
