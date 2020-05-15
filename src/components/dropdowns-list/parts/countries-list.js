import React from 'react';

const CountriesList = ({ countries }) => countries.map((country, index) => {
  country = country[0].toUpperCase() + country.slice(1);

  return <option key={index} value={country}>{country}</option>;
});

export default CountriesList;
