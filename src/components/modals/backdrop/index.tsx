import React, {
  FC,
  MouseEvent,
  KeyboardEvent,
  useContext,
} from 'react';

import { closeModal } from '@store/actions/modals';
import { Context } from '@store/provider';
import { CLOSE_MODAL } from '@store/actions/constants';

import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const Backdrop: FC = ({ children }) => {
  const { state, dispatch } = useContext(Context);
  const { modalsState } = state;

  const closeHandler = (event: MouseEvent | KeyboardEvent) => {
    const element = event.target as HTMLElement;

    element.className === 'fade modal show'
    && dispatch(closeModal());
  };

  return (
    <div
      id="backdrop"
      className={cn(
        'backdrop',
        (modalsState.route !== CLOSE_MODAL && 'backdrop-show'),
      )}
      role="link"
      tabIndex={-1}
      onMouseDown={closeHandler}
      onKeyPress={closeHandler}
    >
      {children}
    </div>
  );
};

export default Backdrop;
