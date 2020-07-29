import {
  ADD_LIST_ITEM,
  UPDATE_LIST_ITEM,
  REMOVE_LIST_ITEM,
  REMOVE_ALL,
  SET_LOGIN,
} from '@store/actions/constants';
import { MixedValueTypes, ValueTypes } from '@apptypes/components';
import { ConstructorReducerTypes } from '@apptypes/store';

let schedule: MixedValueTypes = {
  items: [],
  isLoggedIn: null,
};

export const constructorReducer: ConstructorReducerTypes = (state, action) => {
  console.log('constructorReducer', state);
  switch (action.type) {
    case ADD_LIST_ITEM:
      schedule.items = [
        ...state.items,
        {
          ...action.payload as ValueTypes,
          id: state.items.length,
        },
      ];

      schedule.isLoggedIn
      && localStorage.setItem('schedule', JSON.stringify(schedule));

      return schedule;

    case UPDATE_LIST_ITEM:
      schedule.items = state.items.map((item, index) => {
        const payload = action.payload as ValueTypes;

        if (index !== payload.id) {
          return item;
        }
        return {
          ...item,
          ...payload,
        };
      });

      schedule.isLoggedIn
      && localStorage.setItem('schedule', JSON.stringify(schedule));
      return schedule;

    case REMOVE_LIST_ITEM: {
      const payload = action.payload as ValueTypes;

      schedule.items = state.items.filter(
        (item, index) => index !== payload.id,
      ).map((item, index) => ({
        ...item,
        id: index,
      }));

      schedule.isLoggedIn
      && localStorage.setItem('schedule', JSON.stringify(schedule));
      return schedule;
    }

    case REMOVE_ALL:
      localStorage.removeItem('schedule');
      return null;

    case SET_LOGIN:
      schedule = {
        items: state.items,
        isLoggedIn: action.payload as boolean,
      };
      return schedule;

    default:
      return state;
  }
};

export const constructorLocalState = JSON.parse(localStorage.getItem('schedule') as string) || schedule;
