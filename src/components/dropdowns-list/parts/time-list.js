import React from 'react';

const TimeList = ({ timeValue }) => {
  const numsArr = [];

  for (let i = 0; i <= timeValue; i++) {
    i < 10
      ? numsArr.push(`0${i}`)
      : numsArr.push(i.toString(10));
  }

  return numsArr.map((num, index) => <option key={index} value={num}>{num}</option>);
};

export default TimeList;
