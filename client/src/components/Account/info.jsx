import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile } from '../../store/actions/profile';

import { Avatar } from '../../components/generic/avatar';
import { ProfileInfoList } from '../../components/generic/profileInfoList';

const AccountInfo = ({ profile, getProfileData }) => {
  useEffect(() => {
    getProfileData();
  }, profile);

  const { id, name, avatar, total } = profile;

  return (
    <Fragment>
      <Avatar img={avatar} />
      <ProfileInfoList>
        <ul>
          <li>ID: {profile.id}</li>
          <li>Имя: {name}</li>
          <li>Решено задач: {total}</li>
        </ul>
      </ProfileInfoList>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileData: () => dispatch(getProfile()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountInfo);
