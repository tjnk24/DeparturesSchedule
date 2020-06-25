import React, { FC } from 'react';
import capitalize from '@utils/capitalize';
import { CountriesListProps } from '../types';

const CountriesList: FC<CountriesListProps> = ({ countries }) => (
  <>
    {
      countries.map((country) => {
        const countryValue = capitalize(country);

        return <option key={countryValue} value={countryValue}>{countryValue}</option>;
      })
    }
  </>
);

export default CountriesList;
