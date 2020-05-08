import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import { taskService } from '../../services/task';
import { TaskItem } from '../Task/Item';

import { FlexBlock } from '../../components/layout/FlexBlock';
import { Block } from '../../components/layout/Block';
import { Button } from '../../components/generic/Button';

const TaskList = ({ user }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const taskList = taskService
      .getAllTasks()
      .then((list) => setTasks(...tasks, list.data.data));
  }, 0);

  return (
    <Fragment>
      <FlexBlock justify="space-between">
        <h3>Всего: {tasks.length} задач</h3>
        <Block>
          <Button>
            <NavLink to="/dashboard/tasks/add"></NavLink>
            Добавить задание
          </Button>
          <Button type="disabled" url="">
            <AiOutlineCloudDownload />
            Загрузить CSV
          </Button>
        </Block>
      </FlexBlock>

      {tasks.map(({ title, topic, subtopic }, idx) => (
        <TaskItem key={idx} title={title} topic={topic} subtopic={subtopic} />
      ))}
    </Fragment>
  );
};

export default TaskList;
