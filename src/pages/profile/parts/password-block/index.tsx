import React, { FC, useState } from 'react';
import Form from 'react-bootstrap/esm/Form';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import InputGroup from 'react-bootstrap/esm/InputGroup';
import Button from 'react-bootstrap/esm/Button';

import { PasswordBlockProps } from './types';

const PasswordBlock: FC<PasswordBlockProps> = ({
  password,
  repeatPassword,
}) => {
  const [changePass, setChangePass] = useState(false);

  const {
    labelText : textPassword,
    errors    : errorsPassword,
    ...restPassword
  } = password;

  const {
    errors: errorsRepeat,
    ...restRepeatPassword
  } = repeatPassword;

  delete restRepeatPassword.labelText;

  return (
    <>
      <Form.Group as={Row}>
        <Form.Label column sm={2}>
          { textPassword }
        </Form.Label>
        <Col sm={10}>
          <InputGroup>
            <Form.Control
              {...restPassword}
              isInvalid={!!errorsPassword}
              readOnly={!changePass}
              required
            />
            <InputGroup.Append>
              <Button
                variant="outline-secondary"
                onClick={() => setChangePass(!changePass)}
              >
                Change password
              </Button>
            </InputGroup.Append>
            <Form.Control.Feedback type="invalid">
              { errorsPassword }
            </Form.Control.Feedback>
          </InputGroup>
        </Col>
      </Form.Group>

      {changePass
        ? (
          <Form.Group as={Row}>
            <Col sm={{ span: 10, offset: 2 }}>
              <Form.Control
                {...restRepeatPassword}
                isInvalid={!!errorsRepeat}
                required
              />
              <Form.Control.Feedback type="invalid">
                { errorsRepeat }
              </Form.Control.Feedback>
            </Col>
          </Form.Group>
        )
        : null}
    </>
  );
};

export default PasswordBlock;
