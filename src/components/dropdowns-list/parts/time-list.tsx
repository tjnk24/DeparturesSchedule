import React from 'react';

const TimeList = ({ timeValue }) => {
  const numsArr = [];

  for (let i = 0; i <= timeValue; i += 1) {
    if (i < 10) {
      numsArr.push(`0${i}`);
    } else {
      numsArr.push(i.toString(10));
    }
  }

  return numsArr.map((num) => <option key={num} value={num}>{num}</option>);
};

export default TimeList;
