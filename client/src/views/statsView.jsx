import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';
import { AccountInfo } from '../components/Account/Info';

export const StatsView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Статистика" />
      <Content>
        <p>Вы еще не решили ни одного задания.</p>
      </Content>
    </FadeIn>
  </Fragment>
);
