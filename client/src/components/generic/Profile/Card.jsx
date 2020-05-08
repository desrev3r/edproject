import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './generic.module.scss';

export const ProfileCard = ({ name}) => (
  <div className={styles['profile-card']}>
    <NavLink to="/profile/id"></NavLink>
    <h3>{name}</h3>
    {/* <span className={styles['task-card__topic']}>{topic} / {subtopic}</span> */}
  </div>
);
