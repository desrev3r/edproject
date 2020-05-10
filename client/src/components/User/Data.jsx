import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from './../../store/actions/user';
import authenticationService from './../../services/authentication';

const UserData = ({ user, getUserData }) => {
  useEffect(() => {
    if (authenticationService.isLogin()) {
      getUserData();
    }
  }, 0);

  return <Fragment></Fragment>;
};

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch(getUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserData);
