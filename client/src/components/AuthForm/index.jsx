import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { authenticationService } from '../../services/authentication';

import { setAlert } from '../../store/actions/alert';
import { Validator } from '../../helpers/validator';
import propTypes from 'prop-types';

import { Form } from '../generic/form';
import { Input } from '../generic/input';
import { Button } from '../generic/button';
// import { Input, Button } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

import Alert from '../layout/alert';

const AuthForm = ({ setAlert }) => {
  const [formData, setFormData] = useState({
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
  });

  const validator = new Validator(formData, setFormData);
  const { username, email, password, passwordConfirm } = formData;
  const validateForm = () => {
    validator.email();
    validator.password();

    if (email.valid && password.valid) {
      const userData = {
        email: email.value,
        password: password.value,
      };

      authenticationService.login(userData).then((err) => {
        if (err) {
          setAlert(err.msg, 'danger');
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
        <Alert />
        <Button>Войти</Button>
      </Form>
    </Fragment>
  );
};

AuthForm.propTypes = {
  setAlert: propTypes.func.isRequired,
};

export default connect(null, { setAlert })(AuthForm);
