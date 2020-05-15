import React from 'react';
import classnames from 'classnames/bind';
import TableRow from './parts/table-row';

import bootstrap from '@bootstrap-module';
import style from './style';

const cn = classnames.bind(style);

const ConstructorTable = ({ state }) => (
  <div className={cn('constructor-list')}>
    {
            !state.length ? <p>There's nothing to show. Add some items to the list!</p>

              : (
                <table className={cn(
                  bootstrap.table,
                  bootstrap['table-sm'],
                  'constructor-table',
                )}
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Country</th>
                      <th scope="col">Gate</th>
                      <th scope="col" colSpan="2">Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {state.map((value, index) => (
                      <TableRow
                        key={index}
                        index={index}
                        value={value}
                      />
                    ))}
                  </tbody>
                </table>
              )
        }
  </div>
);

export default ConstructorTable;
