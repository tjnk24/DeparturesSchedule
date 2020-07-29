import {
  addListItemTypes,
  updateListItemTypes,
  removeListItemTypes,
  setItemEditingTypes,
  ConstantType,
  setLoggedInTypes,
} from './types';

import {
  ADD_LIST_ITEM,
  UPDATE_LIST_ITEM,
  REMOVE_LIST_ITEM,
  REMOVE_ALL,
  SET_LOGIN,
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

export const removeAll = (): ConstantType => ({
  type: REMOVE_ALL,
});

export const setLoggedIn: setLoggedInTypes = (payload) => ({
  type: SET_LOGIN,
  payload,
});
