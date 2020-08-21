import {
  addListItemTypes,
  updateListItemTypes,
  removeListItemTypes,
  setItemEditingTypes,
  ConstantType,
  setLoggedInTypes,
  saveHeaderTextTypes,
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

export const addListItem: addListItemTypes = (values) => ({
  type: ADD_LIST_ITEM,
  payload: {
    ...values,
    isEditing: false,
  },
});

export const updateListItem: updateListItemTypes = (id, updatePayload) => ({
  type: UPDATE_LIST_ITEM,
  payload: {
    id,
    ...updatePayload,
  },
});

export const setItemEditing: setItemEditingTypes = (id, isEditing) => ({
  type: UPDATE_LIST_ITEM,
  payload: {
    id,
    isEditing,
  },
});

export const removeListItem: removeListItemTypes = (id) => ({
  type: REMOVE_LIST_ITEM,
  payload: { id },
});

export const saveState = (): ConstantType => ({
  type: SAVE_STATE,
});

export const removeState = (): ConstantType => ({
  type: REMOVE_STATE,
});

export const setLoggedIn: setLoggedInTypes = (payload) => ({
  type: SET_LOGIN,
  payload,
});

export const saveHeaderText: saveHeaderTextTypes = (payload) => ({
  type: SAVE_HEADER,
  payload,
});
