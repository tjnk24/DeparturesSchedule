import React from 'react';

import bootstrap from '@bootstrap-module';
import classnames from 'classnames/bind';
const cn = classnames.bind();

const Dropdown = ({
    name,
    value,
    prevValues,
    onChangeHandler,
    children }) => {

    return (
        <select
            className={cn(bootstrap['form-control'])}
            name={name}
            value={value}
            onChange={(e) => {
                prevValues
                    ? onChangeHandler({
                        ...prevValues,
                        [e.target.name]: e.target.value
                    })
                    : onChangeHandler({[e.target.name]: e.target.value})
            }}
        >
            {children}
        </select>
    );
};

export default Dropdown;