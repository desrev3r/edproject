import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './generic.module.scss';

export const IconLink = ({ children, to }) => {
  const LinkUrl = to || '/';
  return (
    <div className={styles['icon-link']}>
      <NavLink to={LinkUrl}>{children}</NavLink>
    </div>
  );
};
