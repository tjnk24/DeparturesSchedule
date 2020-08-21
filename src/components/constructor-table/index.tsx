import React, { FC } from 'react';
import classnames from 'classnames/bind';
import Table from 'react-bootstrap/esm/Table';
import TableRow from './table-row';
import { ConstructorTableProps, TableRowProps } from './types';

import style from './style.scss';

const cn = classnames.bind(style);

const ConstructorTable: FC<ConstructorTableProps> = ({ state }): JSX.Element => (
  <div className={cn('constructor-list')}>
    {
      !state.length
        ? <p>There&apos;s nothing to show. Add some items to the list!</p>
        : (
          <Table
            size="sm"
            style={{ width: '100%' }}
          >
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Country</th>
                <th scope="col">Gate</th>
                <th scope="col" colSpan={2}>Time</th>
              </tr>
            </thead>
            <tbody>
              {state.map((value : TableRowProps['value'], index) => (
                <TableRow
                  key={value.id}
                  index={index}
                  value={value}
                />
              ))}
            </tbody>
          </Table>
        )
    }
  </div>
);

export default ConstructorTable;
