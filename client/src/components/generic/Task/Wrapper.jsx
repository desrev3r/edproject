import React from 'react';
import styles from './task.module.scss';

export const TaskWrapper = ({ children }) => (
  <div className={styles['task-wrapper']}>{children}</div>
);
