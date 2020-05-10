import React from 'react';
import { NavLink } from 'react-router-dom'
import style from './generic.module.scss';

export const Logotype = () => <div className={style.logotype}><NavLink to="/">EduProject</NavLink></div>;
