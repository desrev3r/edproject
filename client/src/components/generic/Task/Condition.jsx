import React from 'react';
import styles from './task.module.scss';

export const TaskCondition = ({ children }) => (
  <div className={styles['task-condition']}>{children}</div>
);
