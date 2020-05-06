import React, { Fragment } from 'react';

import { Content } from '../components/layout/content';
import { Header } from '../components/layout/header';
import { AccountInfo } from '../components/Account/info';

export const StatsView = () => (
  <Fragment>
    <Header title="Статистика" />
    <Content>
      <p>Вы еще не решили ни одного задания.</p>
    </Content>
  </Fragment>
);
