import {
  ADD_LIST_ITEM,
  UPDATE_LIST_ITEM,
  REMOVE_LIST_ITEM,
  REMOVE_STATE,
  SET_LOGIN,
  SAVE_STATE,
} from '@store/actions/constants';
import { setLocal, getLocal } from '@utils/helpers';

import { MixedValueTypes, ValueTypes } from '@apptypes/components';
import { ConstructorReducerTypes } from '@apptypes/store';

let schedule: MixedValueTypes = {
  items: [],
  isLoggedIn: null,
};

export const constructorReducer: ConstructorReducerTypes = (state, action) => {
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
      && setLocal('schedule', schedule);

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
      && setLocal('schedule', schedule);
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
      && setLocal('schedule', schedule);
      return schedule;
    }
    case SAVE_STATE: {
      const localSchedule = getLocal('schedule');

      !localSchedule && setLocal('schedule', schedule);
      return state;
    }
    case REMOVE_STATE:
      localStorage.removeItem('schedule');
      schedule.items = [];
      return schedule;

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

export const constructorLocalState = getLocal('schedule') || schedule;
