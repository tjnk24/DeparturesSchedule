import React, { FC } from 'react';
import classnames from 'classnames/bind';
import Modal from 'react-bootstrap/esm/Modal';
import Form from 'react-bootstrap/esm/Form';
import Button from 'react-bootstrap/esm/Button';
// import bootstrap from '@bootstrap-module';
import style from './style.scss';

import { LoginProps } from './types';

const cn = classnames.bind(style);

const Login: FC<LoginProps> = ({ modal, handler }) => (
  <Modal show>
    <Modal.Header closeButton>
      <Modal.Title>Log In</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Your Email:</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Your Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
          <Form.Text>
            <Button variant="link">
              Forgot your password?
            </Button>
          </Form.Text>
        </Form.Group>
        <Button style={{ width: '100%' }}>
          Log me in!
        </Button>
      </Form>
    </Modal.Body>
    <Modal.Footer>
      Not a member?
      <Button variant="link">Sign up</Button>
    </Modal.Footer>
  </Modal>
);

export default Login;
