import React, { Fragment, useState } from 'react';
import { connect } from 'react-redux';
import { authenticationService } from '../services/authentication';
import axios from 'axios';

import { setAlert } from '../store/actions/alert';
import propTypes from 'prop-types';

import { Form } from './generic/form';
import { Input } from './generic/input';
import { Button } from './generic/button';
import Alert from './layout/alert';

const AuthForm = ({ alert, setAlert }) => {
  const testuser = {
    email: 'admin@google.com',
    password: '123456',
  };

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const onChangeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    authenticationService.login(email, password).then((err) => {
      if (err) {
        setAlert(err.msg, 'danger');
      }
    });
  };

  return (
    <Fragment>
      <p>
        Для прохождения заданий и получения результатов, Вам необходимо войти в
        систему.
      </p>
      <br />
      <br />
      <Form onSubmit={onSubmitHandler}>
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
        <Alert />
        <Button type="primary">Войти в систему</Button>
      </Form>
    </Fragment>
  );
};

AuthForm.propTypes = {
  setAlert: propTypes.func.isRequired,
};

export default connect(null, { setAlert })(AuthForm);
