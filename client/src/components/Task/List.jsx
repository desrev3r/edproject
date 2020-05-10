import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCloudDownload } from 'react-icons/ai';

import { Conditional } from './../Conditional';
import { Loader } from './../generic/Loader';

import accessService from './../../services/access';
import { taskService } from './../../services/task';
import { TaskListContainer } from './../generic/Task/ListContainer';
import { TaskCard } from './../generic/Task/Card';

import { FlexBlock } from './../layout/FlexBlock';
import { Block } from './../layout/Block';
import { Button } from './../generic/Button';

const TaskList = ({ user }) => {
  const isAdmin = accessService.isAdmin();

  const [tasks, setTasks] = useState({ isLoading: true, list: [] });
  const { isLoading } = tasks;

  useEffect(() => {
    taskService.getAllTasks().then((list) => {
      const taskList = {
        isLoading: false,
        list: list.data.data,
      };
      setTasks({ ...tasks, ...taskList });
    });
  }, 0);

  return (
    <Fragment>
      <FlexBlock justify="space-between">
        <h3>Всего: {tasks.list.length} задач</h3>
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

      <TaskListContainer>
        <Conditional if={!isLoading} else={<Loader />}>
          {tasks.list.map(({ _id, title, topic, subtopic, condition }, idx) => (
            <TaskCard
              key={idx}
              id={_id}
              title={title}
              topic={topic}
              subtopic={subtopic}
              conditionText={condition.text}
            />
          ))}
        </Conditional>
      </TaskListContainer>
    </Fragment>
  );
};

export default TaskList;
