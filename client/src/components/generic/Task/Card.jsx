import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import {
  AiOutlineHeart,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineLeft,
} from 'react-icons/ai';
import styles from './task.module.scss';

import accessService from './../../../services/access';
import { shortId } from './../../../helpers/format';

import { TaskCondition } from './Condition';
import { FlexBlock } from './../../layout/FlexBlock';
import { Block } from './../../layout/Block';
import { IconLink } from './../IconLink';
import { Button } from './../Button';

export const TaskCard = ({ id, title, topic, subtopic, conditionText }) => {
  const isAdmin = accessService.isAdmin;
  return (
    <div className={styles['task-card']}>
      <FlexBlock justify="space-between">
        <h2>Задание #{shortId(id)}</h2>
        <Block>
          {isAdmin ? (
            <Fragment>
              <IconLink to={`edit`}>
                <AiOutlineEdit />
              </IconLink>
              <IconLink to={`delete`}>
                <AiOutlineDelete />
              </IconLink>
            </Fragment>
          ) : (
            <Fragment>
              <IconLink to={`like`}>
                <AiOutlineHeart />
              </IconLink>
            </Fragment>
          )}
        </Block>
      </FlexBlock>
      <span className={styles['task-card__topic']}>
        {topic} / {subtopic}
      </span>
      <TaskCondition>{conditionText}</TaskCondition>

      { isAdmin
        ? (<Button to={`/tasks/${id}`}>Перейти к заданию</Button>)
        : (<Button to={`/tasks/${id}`}>Выполнить задание</Button>)
      }
    </div>
  );
};
