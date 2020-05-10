import React from 'react';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import {
  AiOutlineLogout,
  AiOutlineSetting,
  AiOutlineLineChart,
  AiOutlineUnorderedList,
  AiOutlineControl,
} from 'react-icons/ai';
import styles from './layout.module.scss';

import { Logotype } from './../generic/Logotype';
import { ProfileBlock } from './../generic/ProfileBlock';
import { IconLink } from './../generic/IconLink';

const Sidebar = ({ user }) => {
  const { name, avatar, isAdmin } = user;

  return (
    <div className={styles.sidebar}>
      <Logotype />
      <ProfileBlock name={name} avatar={avatar} />

      <h5>Задачи</h5>
      <div className={styles.taskListMenu}>
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
      {!isAdmin ? (
        <div className={styles['user-nav-menu']}>
          <IconLink to="/tasks">
            <AiOutlineUnorderedList />
          </IconLink>

          <IconLink to="/stats">
            <AiOutlineLineChart />
          </IconLink>

          <IconLink to="/settings">
            <AiOutlineSetting />
          </IconLink>
          <IconLink to="/logout">
            <AiOutlineLogout />
          </IconLink>
        </div>
      ) : (
        <div className={styles['user-nav-menu']}>
          <IconLink to="/dashboard">
            <AiOutlineControl />
          </IconLink>

          <IconLink to="/dashboard/students">
            <AiOutlineLineChart />
          </IconLink>

          <IconLink to="/settings">
            <AiOutlineSetting />
          </IconLink>
          <IconLink to="/logout">
            <AiOutlineLogout />
          </IconLink>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user,
});

export default connect(mapStateToProps)(Sidebar);
