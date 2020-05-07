import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../store/actions/user';
import { Conditional } from '../Conditional';

import { Avatar } from '../generic/Avatar';
import { Loader } from '../generic/Loader';
import { ProfileInfoList } from '../generic/ProfileInfoList';

const AccountInfo = ({ user, getUserData }) => {
  useEffect(() => {
    getUserData();
  }, user);

  const { id, name, avatar, total, isLoading } = user;

  return (
    <Conditional if={!isLoading} else={<Loader />}>
      <Fragment>
        <Avatar img={avatar} />
        <ProfileInfoList>
          <ul>
            <li>ID: {user.id}</li>
            <li>Имя: {name}</li>
            <li>Решено задач: {total}</li>
          </ul>
        </ProfileInfoList>
      </Fragment>
    </Conditional>
  );
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
