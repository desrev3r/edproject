import React from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/logOut';
import { isAuthorized } from '../../services/access';

import { NavLink } from 'react-router-dom';
import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineLineChart,
} from 'react-icons/ai';
import style from './layout.module.scss';

import { Logotype } from '../generic/Logotype';
import { ProfileBlock } from '../generic/ProfileBlock';

const Sidebar = ({ user, onLogOut }) => {
  const { name, avatar } = user;

  return (
    <div className={style.sidebar}>
      <Logotype />
      <ProfileBlock name={name} avatar={avatar} />

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
  user: state.user,
});


export default connect(mapStateToProps)(Sidebar);
