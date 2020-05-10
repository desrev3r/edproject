import React, { Fragment, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';


import propTypes from 'prop-types';
import authenticationService from './../../services/authentication';
import { Validator } from './../../helpers/validator';

import { setAlert, removeAlert } from './../../store/actions/alert';
import { getUser } from './../../store/actions/user';

import { Form } from './../generic/Form';
import { Input } from './../generic/Input';
import { Button } from './../generic/Button';
import Alert from './../layout/Alert';

const SignupForm = ({ history, setAlert, removeAlert, getUser }) => {
  const [formData, setFormData] = useState({
    authorized: false,
    username: {
      value: '',
      type: 'username',
      label: 'Имя',
      errorMessage: 'Введите имя',
      valid: true,
    },
    email: {
      value: '',
      type: 'email',
      label: 'Email',
      errorMessage: 'Введите корректный Email',
      valid: true,
    },
    password: {
      value: '',
      type: 'password',
      label: 'Пароль',
      errorMessage: 'Пароль из минимум 6 символов',
      valid: true,
    },
    passwordConfirm: {
      value: '',
      type: 'passwordConfirm',
      label: 'Повтор пароля',
      errorMessage: 'Пароли не совпадают',
      valid: true,
    },
  });

  const validator = new Validator(formData, setFormData);
  const { username, email, password, passwordConfirm, authorized } = formData;

  const validateForm = () => {
    validator.username();
    validator.email();
    validator.password();
    validator.passwordConfirm();

    if (
      username.valid &&
      email.valid &&
      password.valid &&
      passwordConfirm.valid
    ) {
      const newUser = {
        name: username.value,
        email: email.value,
        password: password.value,
      };

      authenticationService.signup(newUser).then((err) => {
        if (err) {
          setAlert(err.msg, 'danger');
        } else {
          authenticationService.login(newUser).then((res) => {
            if (res !== true) {
              setAlert(res.msg, 'danger');
            } else {
              setFormData({ ...formData, authorized: true });
            }
          });
        }
      });
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    let form = { ...formData };
    form[name].value = value;
    setFormData({ ...form });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    validateForm();
  };

  useEffect(() => {
    if (authorized) {
      getUser();
      history.push('/account');
    }
    removeAlert();
  });

  return (
    <Fragment>
      <Form onSubmit={onSubmitHandler}>
        <Input
          name={username.type}
          label={username.label}
          value={username.value}
          error={!username.valid && username.errorMessage}
          onChange={(e) => onChangeHandler(e)}
        />
        <Input
          name={email.type}
          label={email.label}
          value={email.value}
          error={!email.valid && email.errorMessage}
          onChange={(e) => onChangeHandler(e)}
        />
        <Input
          name={password.type}
          label={password.label}
          value={password.value}
          type="password"
          error={!password.valid && password.errorMessage}
          onChange={(e) => onChangeHandler(e)}
        />
        <Input
          name={passwordConfirm.type}
          label={passwordConfirm.label}
          value={passwordConfirm.value}
          type="password"
          error={!passwordConfirm.valid && passwordConfirm.errorMessage}
          onChange={(e) => onChangeHandler(e)}
        />
        <Alert />
        <Button>Зарегистрироваться</Button>
      </Form>
      <NavLink to="/login">Войти в аккаунт</NavLink>
    </Fragment>
  );
};

SignupForm.propTypes = {
  setAlert: propTypes.func.isRequired,
};

export default connect(null, { setAlert, removeAlert, getUser })(SignupForm);
