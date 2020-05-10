import React, { Children } from 'react';
import styles from './task.module.scss';

export const TaskListContainer = ({ children }) => (
  <div className={styles['task-list-container']}>{children}</div>
);
