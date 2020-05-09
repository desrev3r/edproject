import React from 'react';
import styles from './alert.module.scss';

export const WarningAlert = ({ children }) => (
  <div className={styles['alert-warning']}>{children}</div>
);
