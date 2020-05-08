import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './generic.module.scss';

export const TaskCard = ({ title, topic, subtopic }) => (
  <div className={styles['task-card']}>
    <NavLink to="/tasks"></NavLink>
    <h3>{title}</h3>
    <span className={styles['task-card__topic']}>{topic} / {subtopic}</span>
  </div>
);
