import React, { useState, useEffect } from 'react';
import logo200Image from 'assets/img/logo/logo_kepco.png';
import PropTypes from 'prop-types';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import { useLazyQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const LOGIN_QUERY = gql`
  query login($id: ID!, $password: String!) {
    login(id: $id, password: $password) {
      result
      token
    }
  }
`;

const SIGNUP_QUERY = gql`
  mutation signup($id: ID!, $password: String!) {
    signup(id: $id, password: $password) {
      id
    }
  }
`;

const AuthForm = ({
  authState,
  onChangeAuthState,
  buttonText,
  showLogo,
  usernameLabel,
  usernameInputProps,
  passwordLabel,
  passwordInputProps,
  confirmPasswordLabel,
  confirmPasswordInputProps,
  children,
  onLogoClick,
}) => {
  function isLogin() {
    return authState === STATE_LOGIN;
  }

  function isSignup() {
    return authState === STATE_SIGNUP;
  }

  function changeAuthState(authState) {
    return event => {
      event.preventDefault();

      onChangeAuthState(authState);
    };
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  function renderButtonText() {
    if (!buttonText && isLogin()) {
      return 'Login';
    }

    if (!buttonText && isSignup()) {
      return 'Signup';
    }

    return buttonText;
  }

  const QUERY = authState === STATE_LOGIN ? LOGIN_QUERY : SIGNUP_QUERY;

  const [userId, setUserId] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [sendQuery, { error, loading, data }] = useLazyQuery(QUERY, {
    variables: { id: userId, password: userPassword },
  });

  useEffect(() => {
    if (data && authState === STATE_LOGIN && data.login.result) {
      console.log('token: ', data.login.token);
    } else {
    }
  }, [data, authState]);

  return (
    <Form>
      {loading ? 'loading...........' : ''}
      {showLogo && (
        <div className="text-center pb-4">
          <img
            src={logo200Image}
            className="rounded"
            style={{ width: 60, height: 60, cursor: 'pointer' }}
            alt="logo"
            onClick={onLogoClick}
          />
        </div>
      )}
      <FormGroup>
        <Label for={usernameLabel}>{usernameLabel}</Label>
        <Input
          {...usernameInputProps}
          value={userId}
          onChange={e => {
            setUserId(e.target.value);
          }}
        />
      </FormGroup>
      <FormGroup>
        <Label for={passwordLabel}>{passwordLabel}</Label>
        <Input
          {...passwordInputProps}
          value={userPassword}
          onChange={e => {
            setUserPassword(e.target.value);
          }}
        />
      </FormGroup>
      {isSignup() && (
        <FormGroup>
          <Label for={confirmPasswordLabel}>{confirmPasswordLabel}</Label>
          <Input {...confirmPasswordInputProps} />
        </FormGroup>
      )}
      <FormGroup check>
        <Label check>
          <Input type="checkbox" />{' '}
          {isSignup() ? 'Agree the terms and policy' : 'Remember me'}
        </Label>
      </FormGroup>
      <hr />
      <Button
        size="lg"
        className="bg-gradient-theme-left border-0"
        block
        onClick={sendQuery}
      >
        {renderButtonText()}
      </Button>

      <div className="text-center pt-1">
        <h6>or</h6>
        <h6>
          {isSignup() ? (
            <a href="#login" onClick={() => changeAuthState(STATE_LOGIN)}>
              Login
            </a>
          ) : (
            <a href="#signup" onClick={() => changeAuthState(STATE_SIGNUP)}>
              Signup
            </a>
          )}
        </h6>
      </div>

      {children}
    </Form>
  );
};

export const STATE_LOGIN = 'LOGIN';
export const STATE_SIGNUP = 'SIGNUP';

AuthForm.propTypes = {
  authState: PropTypes.oneOf([STATE_LOGIN, STATE_SIGNUP]).isRequired,
  showLogo: PropTypes.bool,
  usernameLabel: PropTypes.string,
  usernameInputProps: PropTypes.object,
  passwordLabel: PropTypes.string,
  passwordInputProps: PropTypes.object,
  confirmPasswordLabel: PropTypes.string,
  confirmPasswordInputProps: PropTypes.object,
  onLogoClick: PropTypes.func,
};

AuthForm.defaultProps = {
  authState: 'LOGIN',
  showLogo: true,
  usernameLabel: 'Email',
  usernameInputProps: {
    type: 'email',
    placeholder: 'your@email.com',
  },
  passwordLabel: 'Password',
  passwordInputProps: {
    type: 'password',
    placeholder: 'your password',
  },
  confirmPasswordLabel: 'Confirm Password',
  confirmPasswordInputProps: {
    type: 'password',
    placeholder: 'confirm your password',
  },
  onLogoClick: () => {},
};

export default AuthForm;
