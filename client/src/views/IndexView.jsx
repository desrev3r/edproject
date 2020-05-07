import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import { Content } from '../components/layout/Content';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const IndexView = () => (
  <Fragment>
    <FadeIn>
      <Header title="Главная страница" />
      <Content>
        <p>Тут будет основная информация с новостями и тд</p>
      </Content>
    </FadeIn>
  </Fragment>
);
