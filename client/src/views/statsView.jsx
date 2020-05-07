import React, { Fragment } from 'react';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';
import { AccountInfo } from '../components/Account/Info';

export const StatsView = () => (
  <Fragment>
    <Header title="Статистика" />
    <Content>
      <p>Вы еще не решили ни одного задания.</p>
    </Content>
  </Fragment>
);
