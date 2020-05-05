import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './generic.module.scss';

import { Avatar } from './avatar';

export const ProfileBlock = ({ name, avatar }) => {
  return (
    <div className={style.profileBlock}>
      <NavLink to="/account"></NavLink>
      <Avatar img={avatar} />
      <span>{name}</span>
    </div>
  );
};
