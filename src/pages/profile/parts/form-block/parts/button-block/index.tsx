import React, { FC, useRef } from 'react';
import classnames from 'classnames/bind';
import Col from 'react-bootstrap/esm/Col';
import Button from 'react-bootstrap/esm/Button';
import AuthPopover from '@components/auth-popover';
import SubmitButton from '@components/submit-button';

import ButtonBlockProps from './types';

import style from './style.scss';

const cn = classnames.bind(style);

const ButtonBlock: FC<ButtonBlockProps> = ({
  type,
  reauth,
  editing,
  disabled,
  setMessage,
  setEditing,
  setReadOnly,
  showPopover,
  startMessage,
  authSubmitAction,
}) => {
  const buttonRef = useRef<HTMLDivElement | null>(null);

  return (
    <Col sm={3} className={cn('button-wrap')}>
      {
      editing
        ? (
          <>
            <div ref={buttonRef}>
              <SubmitButton
                disabled={disabled}
                innerText="Submit!"
              />
            </div>
            { reauth && (
              <AuthPopover
                target={buttonRef}
                show={showPopover}
                action={authSubmitAction}
                disabled={disabled}
              />
            )}
          </>
        )
        : (
          <Button
            variant="secondary"
            onClick={() => {
              setEditing(true);
              setReadOnly(false);
              setMessage(startMessage || '');
            }}
          >
            {`Change ${type}`}
          </Button>
        )
    }
    </Col>
  );
};

export default ButtonBlock;
