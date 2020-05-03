import React from 'react';
import style from './generic.module.scss';

export const Avatar = ({img}) => <div className={style.avatar}><img src={img} alt="avatar" /></div>;