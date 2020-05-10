import React from 'react';
import styles from './layout.module.scss';

export const FlexBlock = ({ children, justify }) => (
  <div
    className={styles['flex-block']}
    style={{ justifyContent: `${justify}` }}
  >
    {children}
  </div>
);
