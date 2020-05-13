import React, { useState } from 'react';
import Header from '@components/header';
import Schedule from '@pages/schedule';
import Constructor from '@pages/constructor';

import { ConstructorProvider } from '@store/reducers/constructor-reducer';

import classnames from 'classnames/bind';
import style from './style';

const cn = classnames.bind(style);

const App = () => {
    const [scheduleConstructed, setScheduleConstructed] = useState(false);

    return (
        <React.Fragment>
            <Header />
            <ConstructorProvider>
                {scheduleConstructed ?
                    <Schedule /> :
                    <Constructor setConstructed={setScheduleConstructed}/>
                }
            </ConstructorProvider>
        </React.Fragment>
    )
}
export default App;
