import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';
import { shortId } from './../helpers/format';

import TaskSingleInfo from './../components/Task/SingleInfo';

import { Content } from './../components/layout/Content';
import { Header } from './../components/layout/Header';

export const TaskSingleView = ({
  match: {
    params: { taskId },
  },
}) => (
  <Fragment>
    <FadeIn>
      {/* <Header title={`Задание #${shortId(taskId)}`} /> */}
      <Content>
        <TaskSingleInfo id={taskId} />
      </Content>
    </FadeIn>
  </Fragment>
);
