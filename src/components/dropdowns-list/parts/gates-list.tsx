import React, { FC } from 'react';
import { GatesListProps } from '../types';

const GatesList: FC<GatesListProps> = ({ gates }) => {
  const gatesArr: string[] = [];

  Object.keys(gates).forEach((gate) => {
    for (let i = 1; i <= gates[gate]; i += 1) {
      const gatesItem = gate + i;
      gatesArr.push(gatesItem);
    }
  });

  return (
    <>
      { gatesArr.map((gate) => <option key={gate} value={gate}>{gate}</option>) }
    </>
  );
};

export default GatesList;
