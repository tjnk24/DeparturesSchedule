import React, { useState, useEffect, useContext } from 'react';

import { ConstructorContext } from '@store/reducers/constructor-reducer';

const Schedule = () => {
    const { state } = useContext(ConstructorContext);

    useEffect(() => {
        console.log('schedule: ', state);
    }, [state]);

    return <div>Schedule</div>
}

export default Schedule;
