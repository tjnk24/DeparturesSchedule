import { Item } from '@apptypes/common';
import {
  AddListItem,
  UpdateListItem,
  RemoveListItem,
  SetItemEditing,
  SetLoggedIn,
  SaveHeaderText,
  SaveState,
  RemoveState,
} from './types';

import {
  ADD_LIST_ITEM,
  UPDATE_LIST_ITEM,
  REMOVE_LIST_ITEM,
  SAVE_STATE,
  REMOVE_STATE,
  SET_LOGIN,
  SAVE_HEADER,
} from '../constants';

export const addListItem = (values: Item): AddListItem => ({
  type: ADD_LIST_ITEM,
  payload: {
    ...values,
    isEditing: false,
  },
});

export const updateListItem = (id: Item['id'], updatePayload: Item): UpdateListItem => ({
  type: UPDATE_LIST_ITEM,
  payload: {
    ...updatePayload,
    id,
  },
});

export const removeListItem = (id: Item['id']): RemoveListItem => ({
  type: REMOVE_LIST_ITEM,
  payload: { id },
});

export const setItemEditing = (id: Item['id'], isEditing: Item['isEditing']): SetItemEditing => ({
  type: UPDATE_LIST_ITEM,
  payload: {
    id,
    isEditing,
  },
});

export const saveState = (): SaveState => ({
  type: SAVE_STATE,
});

export const removeState = (): RemoveState => ({
  type: REMOVE_STATE,
});

export const setLoggedIn = (payload: boolean): SetLoggedIn => ({
  type: SET_LOGIN,
  payload,
});

export const saveHeaderText = (payload: string): SaveHeaderText => ({
  type: SAVE_HEADER,
  payload,
});
