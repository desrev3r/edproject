import React from 'react';
import styles from './layout.module.scss';

export const Content = (props) => (
  <div className={styles.content}>{props.children}</div>
);
