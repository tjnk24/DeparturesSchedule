import React, { useState, useEffect } from 'react';
import Header from '@components/header';
import Schedule from '@pages/schedule';
import Constructor from '@pages/constructor';

import { ConstructorProvider } from '@store/constructor-reducer';

import classnames from 'classnames/bind';
import style from './style';

// eslint-disable-next-line no-unused-vars
const cn = classnames.bind(style);

const constructing = JSON.parse(localStorage.getItem('constructing'));

const App = () => {
  const [scheduleConstructing, setScheduleConstructing] = useState(constructing);

  useEffect(() => {
    localStorage.setItem('constructing', scheduleConstructing);
  }, [scheduleConstructing]);

  return (
    <>
      <Header />
      <ConstructorProvider>
        {scheduleConstructing
          ? <Schedule setConstructed={setScheduleConstructing} />
          : <Constructor setConstructed={setScheduleConstructing} />}
      </ConstructorProvider>
    </>
  );
};
export default App;
