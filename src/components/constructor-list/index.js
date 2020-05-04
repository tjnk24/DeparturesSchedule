import React, { useState } from 'react';
import classnames from 'classnames/bind';

import bootstrap from '@bootstrap-module';
import style from './style';
const cn = classnames.bind(style);

const ConstructorList = () => {
    const [isEmpty, setIsEmpty] = useState(false);
    return (
        <div className={cn('constructor-list')}>
            {
                isEmpty ? <p>There's nothing to show. Add some items to this list!</p> :

                <table className={cn(
                    bootstrap.table,
                    bootstrap['table-sm'],
                    bootstrap['table-hover'],
                    'constructor-table'
                    )}>
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td colSpan="2">Larry the Bird</td>
                            <td>@twitter</td>
                        </tr>
                    </tbody>
                </table>
            }
        </div>
    );
};

export default ConstructorList;