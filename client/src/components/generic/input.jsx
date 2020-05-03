import React, { Fragment } from 'react';
import style from './generic.module.scss';

export const Input = ({ name, label, placeholder, type, onChange }) => {
  const inputType = type || 'text';

  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <input
        name={name}
        className={style.input}
        type={inputType}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Fragment>
  );
};
