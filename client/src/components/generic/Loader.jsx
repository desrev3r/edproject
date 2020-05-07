import React from 'react';
import style from './generic.module.scss';

export const Loader = ({message}) => (
  <div className={style['loader-container']}>
    <div className={style.loader}/>
    <span className={style['loading-text']}>
      {message ? message : 'Загрузка'}
    </span>
  </div>
)