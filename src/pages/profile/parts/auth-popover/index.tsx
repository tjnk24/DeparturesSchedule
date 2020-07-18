import React, { FC, useState } from 'react';
import FormValidator from '@components/form-validator';
import InnerForm from '@components/modals/inner-form';
import SubmitButton from '@components/submit-button';
import Form from 'react-bootstrap/esm/Form';
import Popover from 'react-bootstrap/esm/Popover';
import Overlay from 'react-bootstrap/esm/Overlay';

import AuthPopoverProps from './types';

const AuthPopover: FC<AuthPopoverProps> = ({ target, show }) => {
  const [errorMessage, seterrorMessage] = useState('');

  const popover = () => (
    <Popover
      id="popover-contained"
    >
      <Popover.Title as="h3">Please, log in again</Popover.Title>
      <Popover.Content>
        <FormValidator
          inputs={['email', 'password']}
        >
          {({ inputProps, handleSubmit }) => {
            const {
              email,
              password,
            } = inputProps;

            return (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <InnerForm {...email} />
                </Form.Group>

                <Form.Group>
                  <InnerForm {...password} />
                </Form.Group>
                {
                    errorMessage !== ''
                    && (
                    <Form.Group>
                      <Form.Text>
                        { errorMessage }
                      </Form.Text>
                    </Form.Group>
                    )
                }
                <SubmitButton
                  disabled={false}
                  innerText="Log me in!"
                />
              </Form>
            );
          }}
        </FormValidator>
      </Popover.Content>
    </Popover>
  );

  return (
    <Overlay target={target.current} show={show} placement="bottom">
      { popover() }
    </Overlay>
  );
};

export default AuthPopover;
