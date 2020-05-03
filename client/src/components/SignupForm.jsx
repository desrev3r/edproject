import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';

import { setAlert } from '../store/actions/alert';
import propTypes from 'prop-types';

import { Form } from './generic/form';
import { Input } from './generic/input';
import { Button } from './generic/button';
import Alert from './layout/alert';

const SignupForm = ({ alert, setAlert }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirm: '',
    formValid: false,
    buttonType: 'disabled',
    errorList: { username: '', email: '', password: '', passwordConfirm: '' },
  });

  const {
    username,
    email,
    password,
    passwordConfirm,
    formValid,
    buttonType,
    errorList,
  } = formData;

  const validateForm = () => {
    let data = { ...formData };

    if (Object.keys(errorList).length < 1) {
      data.buttonType = 'primary';
    }

    setFormData({ data });
  };

  const validateUsername = () => {
    let data = { ...formData };

    if (username.length >= 3) {
      delete data.errorList.username;
    } else {
      data.errorList.username = 'Введите ваше имя';
    }
    setFormData({ data });
  };

  const validateEmail = () => {
    let data = { ...formData };

    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      delete data.errorList.email;
    } else {
      data.errorList.email = 'Введите корректный Email';
    }
    setFormData({ data });
  };

  const validatePassword = () => {
    let data = { ...formData };

    if (password.length >= 6) {
      delete data.errorList.password;
    } else {
      data.errorList.password = 'Пароль должен состоять минимум из 6 символов';
    }
    setFormData({ data });
  };

  const validatePasswordConfirm = () => {
    let data = { ...formData };

    if (password === passwordConfirm) {
      delete data.errorList.passwordConfirm;
    } else {
      data.errorList.passwordConfirm = 'Пароли не совпадают';
    }
    setFormData({ data });
  };

  const onChangeHandler = (e) => {
    validateUsername();
    validateEmail();
    validatePassword();
    validatePasswordConfirm();
    validateForm();

    console.log(errorList);
    console.log(buttonType);

    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    //validateForm();
  };

  return (
    <Fragment>
      <p>После регистрации Вам станет доступен весь функционал сайта.</p>
      <br />
      <br />
      <Form onSubmit={onSubmitHandler}>
        <Input
          name="username"
          label="Имя"
          onChange={(e) => onChangeHandler(e)}
        />
        <Input
          name="email"
          label="Email"
          onChange={(e) => onChangeHandler(e)}
        />
        <Input
          name="password"
          label="Пароль"
          type="password"
          onChange={(e) => onChangeHandler(e)}
        />
        <Input
          name="passwordConfirm"
          label="Повтор пароля"
          type="password"
          onChange={(e) => onChangeHandler(e)}
        />
        <Alert />
        <Button type={buttonType}>Зарегистрироваться</Button>
      </Form>
    </Fragment>
  );
};

SignupForm.propTypes = {
  setAlert: propTypes.func.isRequired,
};

export default connect(null, { setAlert })(SignupForm);
