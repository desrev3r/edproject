import React from 'react';
import styles from './layout.module.scss';

export const Block = ({ children, width }) => (
  <div className={styles.block}>{children}</div>
);
