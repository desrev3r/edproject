import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';
import { AccountInfo } from '../components/Account/Info';

export const SettingsView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Настройки" />
      <Content>
        <p>Данный раздел пока недоступен</p>
      </Content>
    </FadeIn>
  </Fragment>
);
