import React from 'react';
import style from './generic.module.scss';

export const Button = ({ type, children, disabled }) => {
  let buttonStyle = '';
  let status = '';

  switch (type) {
    case 'primary':
      buttonStyle = style.primaryButton;
      break;
    case 'secondary':
      buttonStyle = style.secondaryButton;
      break;
    case 'disabled':
      buttonStyle = style.disabledButton;
      status = 'disabled'
      break;
    default:
      buttonStyle = style.secondaryButton;
  }

  return (
    <button className={buttonStyle} disabled={status}>
      {children}
    </button>
  );
};
