import React from 'react';
import style from './layout.module.scss';

import { Logotype } from '../generic/logotype';
import { ProfileBlock } from '../generic/profileBlock';

export const Sidebar = () => (
  <div className={style.sidebar}>
    <Logotype />
    <ProfileBlock
      name="Альберт Э."
      avatar="https://newstyle-mag.com/wp-content/uploads/2017/02/232.jpg"
    />
    
    <h5>Задачи</h5>
    <div className={style.taskListMenu}>
      <ul>
        <li><a href="#">Cat#1</a></li>
        <li><a href="#">Cat#2</a></li>
        <li><a href="#">Cat#3</a></li>
        <li><a href="#">Cat#4</a></li>
        <li><a href="#">Cat#5</a></li>
        <li><a href="#">Cat#6</a></li>
        <li><a href="#">Cat#7</a></li>
        <li><a href="#">Cat#6</a></li>
        <li><a href="#">Cat#7</a></li>
      </ul>
    </div>
  </div>
);
