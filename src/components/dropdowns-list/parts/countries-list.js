import React from 'react';

const CountriesList = ({ countries }) => countries.map((country) => {
  const countryValue = country[0].toUpperCase() + country.slice(1);

  return <option key={countryValue} value={countryValue}>{countryValue}</option>;
});

export default CountriesList;
