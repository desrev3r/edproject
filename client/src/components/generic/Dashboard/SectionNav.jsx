import React from 'react';
import styles from './dashboard.module.scss';

export const DashboardSectionNav = ({children}) => (
  <div className={styles['dashboard-section-nav']}>
    {children}
  </div>
);
