import React, { FC, useContext } from 'react';
import { TrashIcon, CheckIcon } from '@components/icons';
import Dropdown from '@components/dropdowns-list/parts/dropdown';
import CountriesList from '@components/dropdowns-list/parts/countries-list';
import GatesList from '@components/dropdowns-list/parts/gates-list';
import TimeList from '@components/dropdowns-list/parts/time-list';

import {
  updateListItem,
  removeListItem,
  setItemEditing,
} from '@store/actions/constructor';

import { Context } from '@store/provider';

import classnames from 'classnames/bind';
import style from './style.scss';

import { TableRowProps, UpdateListProps } from '../../types';

const cn = classnames.bind(style);

const TableRow: FC<TableRowProps> = ({ value, index }) => {
  const {
    id,
    country,
    gate,
    hours,
    minutes,
    isEditing,
  } = value;

  const { state, dispatch } = useContext(Context);
  const { appPropsState } = state;

  const stateLoaded = appPropsState.loading === false;

  const updateList: UpdateListProps = (updatePayload) => {
    dispatch(updateListItem(id, updatePayload));
  };

  const removeFromList = () => {
    dispatch(removeListItem(id));
  };

  const setEditing = (bool: boolean) => {
    dispatch(setItemEditing(id, bool));
  };

  return (
    <>
      {
            !isEditing
              ? (
                <tr
                  className={cn('table-row', 'table-row-clickable')}
                  onClick={() => setEditing(!isEditing)}
                >
                  <th className={cn('table-row__index')} scope="row">{index + 1}</th>
                  <td className={cn('table-row__country')}>{country}</td>
                  <td className={cn('table-row__gate')}>{gate}</td>
                  <td className={cn('table-row__time')}>{`${hours}:${minutes}`}</td>
                </tr>
              )
              : (
                <tr className={cn('table-row')}>
                  <th className={cn('table-row__index')} scope="row">{index + 1}</th>
                  <td className={cn('table-row__country')}>
                    <Dropdown
                      name="country"
                      value={country}
                      onChangeHandler={updateList}
                    >
                      { stateLoaded && <CountriesList countries={appPropsState.countries} /> }
                    </Dropdown>
                  </td>
                  <td className={cn('table-row__gate')}>
                    <Dropdown
                      name="gate"
                      value={gate}
                      onChangeHandler={updateList}
                    >
                      { stateLoaded && <GatesList gates={appPropsState.gates} /> }
                    </Dropdown>
                  </td>
                  <td className={cn('table-row__time')}>
                    <div>
                      <Dropdown
                        name="hours"
                        value={hours}
                        onChangeHandler={updateList}
                      >
                        <TimeList timeValue={23} />
                      </Dropdown>
                      <span>:</span>
                      <Dropdown
                        name="minutes"
                        value={minutes}
                        onChangeHandler={updateList}
                      >
                        <TimeList timeValue={59} />
                      </Dropdown>
                    </div>
                    <div>
                      <button
                        type="button"
                        onClick={removeFromList}
                      >
                        { TrashIcon }
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditing(!isEditing)}
                      >
                        { CheckIcon }
                      </button>
                    </div>
                  </td>
                </tr>
              )
            }
    </>
  );
};

export default TableRow;
