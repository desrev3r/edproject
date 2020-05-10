import React from 'react';
import style from './layout.module.scss';

export const Layout = (props) => <div className={style.layout}>{props.children}</div>;
