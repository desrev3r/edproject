import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { authenticationService } from '../../services/authentication';

import { setAlert } from '../../store/actions/alert';
import { Validator } from '../../helpers/validator';
import propTypes from 'prop-types';

import { Form } from '../generic/form';
import { Input } from '../generic/input';
import { Button } from '../generic/button';
import Alert from '../layout/alert';

const SignupForm = ({ setAlert }) => {
  const [formData, setFormData] = useState({
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
  const { username, email, password, passwordConfirm } = formData;

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
          authenticationService.login(newUser);
        }
      });
    }
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    let form = { ...formData };
    let input = form[name];
    input.value = value;
    setFormData({ ...form });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    validateForm();
  };

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
    </Fragment>
  );
};

SignupForm.propTypes = {
  setAlert: propTypes.func.isRequired,
};

export default connect(null, { setAlert })(SignupForm);
