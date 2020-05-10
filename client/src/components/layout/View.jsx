import React from 'react';
import styles from './layout.module.scss';

export const View = ({children}) => <div className={styles.view}>{children}</div>;
