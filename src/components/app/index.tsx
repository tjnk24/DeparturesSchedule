import React, { useState, useEffect } from 'react';
import Header from '@components/header';
import Schedule from '@pages/schedule';
import Constructor from '@pages/constructor';

import { Provider } from '@store/provider';

import classnames from 'classnames/bind';
import style from './style.scss';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const cn = classnames.bind(style);

const constructing = JSON.parse(localStorage.getItem('constructing') as string);

const App = (): JSX.Element => {
  const [scheduleConstructing, setScheduleConstructing] = useState(constructing);

  useEffect(() => {
    localStorage.setItem('constructing', scheduleConstructing);
  }, [scheduleConstructing]);

  return (
    <>
      <Header />
      <Provider>
        {scheduleConstructing
          ? <Schedule setConstructed={setScheduleConstructing} />
          : <Constructor setConstructed={setScheduleConstructing} />}
      </Provider>
    </>
  );
};
export default App;
