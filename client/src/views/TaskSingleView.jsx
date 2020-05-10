import React, { Fragment } from 'react';
import FadeIn from 'react-fade-in';

import TaskSingleInfo from './../components/Task/SingleInfo';

import { Content } from './../components/layout/Content';

export const TaskSingleView = ({
  match: {
    params: { taskId },
  },
}) => (
  <Fragment>
    <FadeIn>
      <Content>
        <TaskSingleInfo id={taskId} />
      </Content>
    </FadeIn>
  </Fragment>
);
