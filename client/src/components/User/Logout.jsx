import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import { logOut } from '../../store/actions/logOut';

const UserLogOut = ({ history, isLoggedIn, onLogOut }) => {
  if (!isLoggedIn) {
    history.push('/');
  } else {
    console.log('FINALLY LOGOUT!')
    onLogOut();
  }

  return <Fragment></Fragment>;
};

const mapStateToProps = (state) => ({
  isLoggedIn: state.user.loggedIn,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onLogOut: () => dispatch(logOut()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserLogOut);
