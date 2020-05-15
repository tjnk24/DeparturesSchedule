import React from 'react';

const GatesList = ({ gates }) => {
  const gatesArr = [];

  for (const gate in gates) {
    for (let i = 1; i <= gates[gate]; i++) {
      const gatesItem = gate + i;
      gatesArr.push(gatesItem);
    }
  }

  return gatesArr.map((gate, index) => <option key={index} value={gate}>{gate}</option>);
};

export default GatesList;
