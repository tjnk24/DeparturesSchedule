import React, { FC } from 'react';
import classnames from 'classnames/bind';
import TableRow from './parts/table-row';
import { ConstructorTableProps } from './types';

import bootstrap from '@bootstrap-module';
import style from './style.scss';

const cn = classnames.bind(style);

const ConstructorTable: FC<ConstructorTableProps> = ({ state }): JSX.Element => (
  <div className={cn('constructor-list')}>
    {
            !state.length ? <p>There&apos;s nothing to show. Add some items to the list!</p>

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
                        key={value.id}
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
