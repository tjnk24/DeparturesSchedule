import React, { useState, useEffect } from 'react';
import Header from '@components/header';
import Schedule from '@pages/schedule';
import Constructor from '@pages/constructor';

import { ConstructorProvider } from '@store/reducers/constructor-reducer';

import classnames from 'classnames/bind';
import style from './style';

const cn = classnames.bind(style);

const App = () => {
    // TODO: в localstorage нельзя хранить булевы значения, нужно перевести этот стейт на "0 или 1"
    const [scheduleConstructing, setScheduleConstructing] = useState(false);

    // useEffect(() => {
    //     localStorage.setItem('constructing', scheduleConstructing);
    // }, [scheduleConstructing])

    return (
        <React.Fragment>
            <Header />
            <ConstructorProvider>
                {scheduleConstructing ?
                    <Schedule setConstructed={setScheduleConstructing}/> :
                    <Constructor setConstructed={setScheduleConstructing}/>
                }
            </ConstructorProvider>
        </React.Fragment>
    )
}
export default App;
