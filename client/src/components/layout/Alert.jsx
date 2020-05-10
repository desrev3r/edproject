import React from 'react';
import FadeIn from 'react-fade-in';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import style from './layout.module.scss';

const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <FadeIn>
      <div key={alert.id} className={style.alert}>
        {alert.msg}
      </div>
    </FadeIn>
  ));

alert.propTypes = {
  alerts: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});

export default connect(mapStateToProps)(Alert);
