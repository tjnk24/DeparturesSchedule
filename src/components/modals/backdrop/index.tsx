import React, {
  FC,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { closeModal } from '@store/actions/modals';
import { CLOSE_MODAL } from '@store/actions/constants';

import { RootState } from '@store/reducers/rootReducer/types';

import classnames from 'classnames/bind';
import style from './style.scss';

const cn = classnames.bind(style);

const Backdrop: FC = ({ children }) => {
  const dispatch = useDispatch();
  const { route } = useSelector((state: RootState) => state.modals);

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
        (route !== CLOSE_MODAL && 'backdrop-show'),
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
