import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import authenticationService from '../../services/authentication';
import accessService from '../../services/access';
import { taskService } from '../../services/task';
import { TaskCard } from '../generic/Task/Card';

import { FlexBlock } from '../layout/FlexBlock';
import { Block } from '../layout/Block';
import { Button } from '../generic/Button';

const TaskList = ({ user }) => {
  const isLogin = authenticationService.isLogin();
  const isAdmin = accessService.isAdmin();

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
          {isAdmin ? (
            <Fragment>
              <Button>
                <NavLink to="/dashboard/tasks/add"></NavLink>
                Добавить задание
              </Button>
              <Button type="disabled" url="">
                <AiOutlineCloudDownload />
                Загрузить CSV
              </Button>
            </Fragment>
          ) : (
            <Fragment>
            <Button type="disabled">Раздел</Button>
              <Button type="disabled">Тема</Button>
              <Button type="disabled">Сложность</Button>
            </Fragment>
          )}
        </Block>
      </FlexBlock>

      {tasks.map(({ _id, title, topic, subtopic, condition }, idx) => (
        <TaskCard
          key={idx}
          id={_id}
          title={title}
          topic={topic}
          subtopic={subtopic}
          conditionText={condition.text}
        />
      ))}
    </Fragment>
  );
};

export default TaskList;
