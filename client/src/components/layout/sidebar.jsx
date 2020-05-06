import React from 'react';
import { connect } from 'react-redux';
import { isAuthorized } from '../../services/access';

import { NavLink } from 'react-router-dom';
import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineLineChart,
} from 'react-icons/ai';
import style from './layout.module.scss';

import { Logotype } from '../generic/logotype';
import { ProfileBlock } from '../generic/profileBlock';

const Sidebar = ({profile}) => {

  
  const { id, name, avatar, total } = profile;

  return (
    <div className={style.sidebar}>
      <Logotype />

      {isAuthorized() ? (
        <ProfileBlock
          name={name}
          avatar={avatar}
        />
      ) : (
        <ProfileBlock
          name="Гость"
          avatar="https://lovely-mebel.ru/template/img/default_avatar.png"
        />
      )}

      <h5>Задачи</h5>
      <div className={style.taskListMenu}>
        <ul>
          <li>
            <a href="#">Cat#1</a>
          </li>
          <li>
            <a href="#">Cat#2</a>
          </li>
          <li>
            <a href="#">Cat#3</a>
          </li>
          <li>
            <a href="#">Cat#4</a>
          </li>
          <li>
            <a href="#">Cat#5</a>
          </li>
          <li>
            <a href="#">Cat#6</a>
          </li>
          <li>
            <a href="#">Cat#7</a>
          </li>
          <li>
            <a href="#">Cat#6</a>
          </li>
          <li>
            <a href="#">Cat#7</a>
          </li>
        </ul>
      </div>
      <div className={style.userNavMenu}>
        <NavLink to="/stats">
          <AiOutlineLineChart size="1.4em" />
        </NavLink>
        <NavLink to="/settings">
          <AiOutlineSetting size="1.4em" />
        </NavLink>
        <NavLink to="/logout">
          <AiOutlineLogout size="1.4em" />
        </NavLink>
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  profile: state.profile,
});

export default connect(mapStateToProps)(Sidebar);