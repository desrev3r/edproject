import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './dashboard.module.scss';

export const DashboardSectionCard = ({ title, url }) => (
  <div className={styles['dashboard-section-nav__card']}>
    <h3>{title}</h3>
    <NavLink to={`/dashboard/${url}`}></NavLink>
  </div>
);
