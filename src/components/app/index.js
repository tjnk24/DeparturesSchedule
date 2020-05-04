import React, { useState } from 'react';
import classnames from 'classnames/bind';

import Header from '../header';
import Schedule from '@pages/schedule';
import Constructor from '@pages/constructor';

import style from './style';

const cn = classnames.bind(style);

const App = () => {
    const [scheduleConstructed, setScheduleConstructed] = useState(false);

    return (
        <React.Fragment>
            <Header />
            {scheduleConstructed ?
                <Schedule /> :
                <Constructor setConstructed={setScheduleConstructed} />
            }
        </React.Fragment>
    )
}
export default App;
