import React from 'react';

import bootstrap from '@bootstrap-module';
import classnames from 'classnames/bind';
const cn = classnames.bind();

const Dropdown = ({ className, label, value, onChangeHandler, children }) => {
    return (
        <React.Fragment>
            <div className={className}>
                { label
                    ? <label>{label}</label>
                    : null
                }
                <select
                    className={cn(bootstrap['form-control'])}
                    value={value}
                    onChange={(e) => onChangeHandler(e.target.value)}
                >
                    {children}
                </select>
            </div>
            { label === 'Time' ? <span>:</span> : null }
        </React.Fragment>
    );
};

export default Dropdown;