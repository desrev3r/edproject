import React from 'react';
import style from './layout.module.scss';

export const Content = (props) => (
  <div className={style.content}>{props.children}</div>
);
