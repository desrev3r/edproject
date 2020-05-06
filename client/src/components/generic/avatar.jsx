import React from 'react';
import style from './generic.module.scss';

export const MinifiedAvatar = ({img}) => <div className={style.minifiedAvatar}><img src={img} alt="avatar" /></div>;
export const Avatar = ({img}) => <div className={style.avatar}><img src={img} alt="avatar" /></div>;