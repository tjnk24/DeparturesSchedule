import React, { FC } from 'react';
import FormValidator from '@components/form-validator';
import InnerForm from '@components/modals/inner-form';
import SubmitButton from '@components/submit-button';
import Form from 'react-bootstrap/esm/Form';
import Popover from 'react-bootstrap/esm/Popover';
import Overlay from 'react-bootstrap/esm/Overlay';

import AuthPopoverProps from './types';

const AuthPopover: FC<AuthPopoverProps> = ({
  target,
  show,
  action,
  disabled,
}) => {
  const popover = () => (
    <Popover
      id="popover-contained"
    >
      <Popover.Content>
        <FormValidator
          inputs={['password']}
          action={action}
        >
          {({ inputProps, handleSubmit }) => {
            const {
              password,
            } = inputProps;

            return (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group>
                  <InnerForm {...password} />
                </Form.Group>
                <SubmitButton
                  style={{ width: '100%' }}
                  disabled={disabled}
                  innerText="Submit"
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
