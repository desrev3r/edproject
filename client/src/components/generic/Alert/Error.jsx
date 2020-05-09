import React from 'react';
import styles from './alert.module.scss';

export const ErrorAlert = ({ children }) => (
  <div className={styles['alert-error']}>{children}</div>
);
