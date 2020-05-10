import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './generic.module.scss';

export const Button = ({ children, type, to, onClick}) => {
  let buttonStyle = `${styles.button} `;
  let status = '';

  switch (type) {
    case 'primary':
      buttonStyle += styles['button--primary'];
      break;
    case 'secondary':
      buttonStyle += styles['button--secondary'];
      break;
    case 'disabled':
      buttonStyle += styles['button--disabled'];
      break;
    default:
      buttonStyle += styles['button--primary'];
  }


  return (
    <button className={buttonStyle} disabled={status} onClick={onClick}>
      { to && <NavLink to={to}></NavLink>}
      {children}
    </button>
  );
};
