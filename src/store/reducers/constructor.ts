import {
  ADD_LIST_ITEM,
  UPDATE_LIST_ITEM,
  REMOVE_LIST_ITEM,
} from '@store/actions/constants';
import { MixedValueTypes } from '@apptypes/components';
import { ConstructorReducerTypes } from '@apptypes/store';

let schedule: MixedValueTypes[] = [];

const constructorReducer: ConstructorReducerTypes = (state, action) => {
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
        if (index !== action.payload?.id) {
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
        (item, index) => index !== action.payload?.id,
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

const constructorLocalState = JSON.parse(localStorage.getItem('schedule') as string);

export { constructorReducer, constructorLocalState };
