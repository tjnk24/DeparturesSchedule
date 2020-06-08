import React, { FC, useReducer } from 'react';
import { ADD_LIST_ITEM, UPDATE_LIST_ITEM, REMOVE_LIST_ITEM } from '@store/actionTypes';
import { MixedValueTypes } from '@apptypes/components';

let schedule: MixedValueTypes[] = [];

type constructorReducerProps = (
  state: MixedValueTypes[],
  action: {
    type: string;
    payload: MixedValueTypes;
  }
) => MixedValueTypes[];

export const constructorReducer: constructorReducerProps = (state, action) => {
  switch (action.type) {
    case ADD_LIST_ITEM:
      schedule = [
        ...state,
        {
          ...action.payload,
          id: state.length,
        },
      ];

      localStorage.setItem('schedule', JSON.stringify(schedule));

      return schedule;

    case UPDATE_LIST_ITEM:
      schedule = state.map((item, index) => {
        if (index !== action.payload.id) {
          return item;
        }
        return {
          ...item,
          ...action.payload,
        };
      });
      localStorage.setItem('schedule', JSON.stringify(schedule));

      return schedule;

    case REMOVE_LIST_ITEM:
      schedule = state.filter(
        (item, index) => index !== action.payload.id,
      ).map((item, index) => ({
        ...item,
        id: index,
      }));

      localStorage.setItem('schedule', JSON.stringify(schedule));

      return schedule;
    default:
      return state;
  }
};


const localState = JSON.parse(localStorage.getItem('schedule') as string);

export const ConstructorContext = React.createContext<Partial<MixedValueTypes[]>>([]);

export const ConstructorProvider: FC = (props): JSX.Element => {
  const [state, dispatch] = useReducer(constructorReducer, localState || schedule);
  const { children } = props;
  return (
    <ConstructorContext.Provider value={{ state, dispatch }}>
      { children }
    </ConstructorContext.Provider>
  );
};
