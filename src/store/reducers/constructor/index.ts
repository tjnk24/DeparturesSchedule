import {
  ADD_LIST_ITEM,
  UPDATE_LIST_ITEM,
  REMOVE_LIST_ITEM,
  REMOVE_STATE,
  SET_LOGIN,
  SAVE_STATE,
  SAVE_HEADER,
} from '@store/actions/constants';
import { setLocal, getLocal } from '@utils/helpers';

import { Items } from '@apptypes/common';
import { Reducer } from 'redux';
import { ConstructorActions } from '@store/actions/constructor/types';
import { ConstructorState } from './types';

let schedule: ConstructorState = {
  headerText: 'Your Airport Schedule',
  items: [],
  isLoggedIn: null,
};

export const constructorReducer:
    Reducer<ConstructorState, ConstructorActions> = (state = schedule, action) => {
      switch (action.type) {
        case ADD_LIST_ITEM:
          schedule.items = [
            ...state.items,
            {
              ...action.payload as Items,
              id: state.items.length,
            },
          ];

          schedule.isLoggedIn
      && setLocal('schedule', schedule);

          return schedule;

        case UPDATE_LIST_ITEM:
          schedule.items = state.items.map((item, index) => {
            const payload = action.payload as Items;

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
          const payload = action.payload as Items;

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
            ...state,
            items: state.items,
            isLoggedIn: action.payload as boolean,
          };
          return schedule;

        case SAVE_HEADER:
          schedule = {
            ...state,
            headerText: action.payload as string,
          };

          schedule.isLoggedIn
      && setLocal('schedule', schedule);
          return schedule;
        default:
          return state;
      }
    };

export const constructorLocalState = getLocal('schedule') || schedule;
