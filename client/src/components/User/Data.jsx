import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { getUser } from '../../store/actions/user';
import { isAuthorized } from '../../services/access';

const UserData = ({ getUserData }) => {
  useEffect(() => {
    if (isAuthorized()) {
      getUserData();
    }
  }, 0);

  return <Fragment></Fragment>;
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: () => dispatch(getUser()),
  };
};

export default connect(null, mapDispatchToProps)(UserData);
