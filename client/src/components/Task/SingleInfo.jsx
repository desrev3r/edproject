import React, { Fragment, useState, useEffect } from 'react';
import FadeIn from 'react-fade-in';
import { NavLink } from 'react-router-dom';
import {
  AiOutlineHeart,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineLeft,
} from 'react-icons/ai';

import authenticationService from '../../services/authentication';
import accessService from '../../services/access';
import { taskService } from '../../services/task';
import { Validator } from '../../helpers/validator';
import { shortId } from '../../helpers/format';

import { TaskWrapper } from '../../components/generic/Task/Wrapper';
import { TaskCondition } from '../../components/generic/Task/Condition';

import { FlexBlock } from '../../components/layout/FlexBlock';
import { Block } from '../../components/layout/Block';
import { Form } from '../generic/Form';
import { Input } from '../generic/Input';
import { Button } from '../../components/generic/Button';
import { IconLink } from '../../components/generic/IconLink';
import { SuccessAlert } from '../../components/generic/Alert/Success';
import { WarningAlert } from '../../components/generic/Alert/Warning';

const TaskSingleInfo = ({ id }) => {
  const isLogin = authenticationService.isLogin();
  const isAdmin = accessService.isAdmin();
  const [task, setTask] = useState({ started: false });
  const [formData, setFormData] = useState({
    solved: false,
    answer: {
      value: '',
      type: 'answer',
      label: 'Ваш ответ',
      errorMessage: 'Ответ неверный',
      valid: true,
    },
  });

  const validator = new Validator(formData, setFormData);
  const { solved, answer } = formData;

  const startTaskHandler = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setTask({ ...task, started: true });
    }, 100);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    let form = { ...formData };
    form[name].value = value;
    setFormData({ ...form });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    validator.checkTaskAnswer(task.answer);

    if (answer.valid) {
      setFormData({ ...formData, solved: true });
    }
  };

  useEffect(() => {
    const taskInfo = taskService.getTaskById(id).then(({ data: { data } }) => {
      const condition = { text: data.condition.text, img: data.condition.img };
      const info = {
        ...data,
        id: shortId(id),
        conditionText: condition.text,
        conditionImg: condition.img,
      };
      delete info.condition;
      setTask({ ...task, ...info });
    });
  }, {});

  const taskUrl = window.location.pathname;

  return (
    <TaskWrapper>
      <FlexBlock justify="space-between">
        <h2>Задание #{task.id}</h2>
        <Block>
          {isAdmin ? (
            <Fragment>
              <IconLink to={`${taskUrl}/edit`}>
                <AiOutlineEdit />
              </IconLink>
              <IconLink to={`${taskUrl}/delete`}>
                <AiOutlineDelete />
              </IconLink>
            </Fragment>
          ) : (
            <Fragment>
              <IconLink to={`${taskUrl}/like`}>
                <AiOutlineHeart />
              </IconLink>
            </Fragment>
          )}
        </Block>
      </FlexBlock>
      <span>
        {task.topic} / {task.subtopic}
      </span>

      <TaskCondition>
        <p>{task.conditionText}</p>
        <img src={task.conditionImg} alt="task-img" />
        <br />
        {task.answer}
      </TaskCondition>

      {isLogin ? (
        <FadeIn>
          {solved ? (
            <FadeIn>
              <SuccessAlert>
                <h6>Поздравляем!</h6>
                <span> Вы решили задание верно. </span>
                <span> Ваш ответ: {answer.value} </span>
              </SuccessAlert>

              <Button type="secondary" to="/tasks/">
                Вернуться в каталог
              </Button>
            </FadeIn>
          ) : (
            <Form onSubmit={onSubmitHandler}>
              <Input
                name="answer"
                label="Ваш ответ"
                max="8"
                placeholder="Введите число"
                error={!answer.valid && answer.errorMessage}
                onChange={(e) => onChangeHandler(e)}
              />
              <Button onClick={onSubmitHandler}>Проверить задание</Button>
            </Form>
          )}
        </FadeIn>
      ) : (
        <WarningAlert>
          <h6>ВНИМАНИЕ!</h6>
          <span>Только авторизованные студенты могут решать задания. </span>
        </WarningAlert>
      )}

      <NavLink to="/tasks">Вернуться в каталог</NavLink>
    </TaskWrapper>
  );
};

export default TaskSingleInfo;