import React from 'react';
import style from './generic.module.scss';

export const Form = ({children, onSubmit}) => (
  <form className={style.form} onSubmit={onSubmit}>{children}</form>
);
