import React, { FC } from 'react';
import { CountriesListProps } from '../types';

const CountriesList: FC<CountriesListProps> = ({ countries }) => (
  <>
    {
      countries.map((country) => {
        const countryValue = country[0].toUpperCase() + country.slice(1);

        return <option key={countryValue} value={countryValue}>{countryValue}</option>;
      })
    }
  </>
);

export default CountriesList;
