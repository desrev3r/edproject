import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './generic.module.scss';

import { MinifiedAvatar } from './Avatar';

export const ProfileBlock = ({ name, avatar }) => {
  return (
    <div className={style.profileBlock}>
      <NavLink to="/account"></NavLink>
      <MinifiedAvatar img={avatar} />
      <span>{name}</span>
    </div>
  );
};
