import React from 'react';
import styles from './alert.module.scss';

export const SuccessAlert = ({ children }) => (
  <div className={styles[('alert-success')]}>{children}</div>
);
