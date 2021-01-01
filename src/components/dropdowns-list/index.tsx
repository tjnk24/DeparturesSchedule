import React, { FC } from 'react';
import classnames from 'classnames/bind';
import Dropdown from './parts/dropdown';
import CountriesList from './parts/countries-list';
import GatesList from './parts/gates-list';
import TimeList from './parts/time-list';

import style from './style.scss';

import { DropdownsListProps } from './types';

const cn = classnames.bind(style);

const DropdownsList: FC<DropdownsListProps> = ({
  values,
  handler,
  countries,
  gates,
}) => {
  const {
    country,
    gate,
    hours,
    minutes,
  } = values;

  const dropdownListProps = [
    {
      className: cn('dropdown-list__country'),
      label: 'Country',
      name: 'country',
      value: country,
      children: (): JSX.Element => <CountriesList countries={countries} />,
    },
    {
      className: cn('dropdown-list__gate'),
      label: 'Gate',
      name: 'gate',
      value: gate,
      children: (): JSX.Element => <GatesList gates={gates} />,
    },
    {
      className: cn('dropdown-list__time'),
      label: 'Time',
      name: 'hours',
      value: hours,
      children: (): JSX.Element => <TimeList timeValue={23} />,
    },
    {
      className: cn('dropdown-list__time'),
      name: 'minutes',
      value: minutes,
      children: () => <TimeList timeValue={59} />,
    },
  ];

  return (
    <div className={cn('dropdown-list')}>
      { dropdownListProps.map((prop) => (
        <React.Fragment key={prop.name}>
          <div className={prop.className}>
            { prop.label
              ? <h6>{prop.label}</h6>
              : null}
            <Dropdown
              name={prop.name}
              value={prop.value}
              prevValues={values}
              onChangeHandler={handler}
            >
              { prop.children() }
            </Dropdown>
          </div>
          { prop.label === 'Time' ? <span>:</span> : null }
        </React.Fragment>
      ))}
    </div>
  );
};

export default DropdownsList;
