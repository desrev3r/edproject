import React, { Fragment } from 'react';
import style from './generic.module.scss';
import { LabelError } from './LabelError';

export const Input = ({
  name,
  label,
  value,
  error,
  placeholder,
  type,
  onChange,
}) => {
  const inputType = type || 'text';

  return (
    <Fragment>
      <label htmlFor={name}>{label}</label>
      <LabelError text={error} />
      <input
        id={name}
        name={name}
        className={style.input}
        type={inputType}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </Fragment>
  );
};
