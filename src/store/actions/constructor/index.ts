import {
  addListItemTypes,
  updateListItemTypes,
  removeListItemTypes,
  setItemEditingTypes,
} from './types';

import { ADD_LIST_ITEM, UPDATE_LIST_ITEM, REMOVE_LIST_ITEM } from '../constants';

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

export const removeListItem: removeListItemTypes = (id) => ({
  type: REMOVE_LIST_ITEM,
  payload: { id },
});

export const setItemEditing: setItemEditingTypes = (id, isEditing) => ({
  type: UPDATE_LIST_ITEM,
  payload: {
    id,
    isEditing,
  },
});
