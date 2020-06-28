import React, {
  FC,
  cloneElement,
  isValidElement,
  Children,
  MouseEvent,
  KeyboardEvent,
} from 'react';
import classnames from 'classnames/bind';
import style from './style.scss';

import BackdropProps from './types';

const cn = classnames.bind(style);

const Backdrop: FC<BackdropProps> = ({ modal, handler, children }) => {
  const childrenWithProps = Children.map(children, (child) => {
    if (isValidElement(child)) {
      return cloneElement(child, { modal, handler });
    }

    return child;
  });

  const closeHandler = (event: MouseEvent | KeyboardEvent) => {
    const element = event.target as HTMLElement;

    element.className === 'fade modal show'
    && handler('');
  };

  return (
    <div
      id="backdrop"
      className={cn(
        'backdrop',
        (modal !== '' && 'backdrop-show'),
      )}
      role="link"
      tabIndex={-1}
      onMouseDown={closeHandler}
      onKeyPress={closeHandler}
    >
      {childrenWithProps}
    </div>
  );
};

export default Backdrop;
