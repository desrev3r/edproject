import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { resetUser } from './../../store/actions/user';
import authenticationService from './../../services/authentication';

const UserLogOut = ({ history, resetUser }) => {
  if (!authenticationService.isLogin()) {
    history.push('/');
  } else {
    authenticationService.logout();
    resetUser();
    history.push('/');
  }

  return <Fragment></Fragment>;
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.loggedIn,
});

const mapDispatchToProps = (dispatch) => {
  return {
    resetUser: () => dispatch(resetUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogOut);
