import React from 'react';
import style from './generic.module.scss';

import { Avatar } from './avatar';

export const ProfileBlock = ({ name, avatar }) => {
  const url = `/user/:id`;

  return (
    <div className={style.profileBlock}>
      <a href={url}></a>
      <Avatar img={avatar} />
      <span>{name}</span>
    </div>
  );
};
