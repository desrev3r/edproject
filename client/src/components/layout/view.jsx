import React from 'react';
import style from './layout.module.scss';

export const View = (props) => <div className={style.view}>{props.children}</div>;
