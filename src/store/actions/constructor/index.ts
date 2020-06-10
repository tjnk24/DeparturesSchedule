import {
  addListItemTypes,
  updateListItemTypes,
  removeListItemTypes,
  setItemEditingTypes,
} from './types';

import { ADD_LIST_ITEM, UPDATE_LIST_ITEM, REMOVE_LIST_ITEM } from '../constants';

const addListItem: addListItemTypes = (values) => ({
  type: ADD_LIST_ITEM,
  payload: {
    ...values,
    isEditing: false,
  },
});

const updateListItem: updateListItemTypes = (id, updatePayload) => ({
  type: UPDATE_LIST_ITEM,
  payload: {
    id,
    ...updatePayload,
  },
});

const removeListItem: removeListItemTypes = (id) => ({
  type: REMOVE_LIST_ITEM,
  payload: { id },
});

const setItemEditing: setItemEditingTypes = (id, isEditing) => ({
  type: UPDATE_LIST_ITEM,
  payload: {
    id,
    isEditing,
  },
});

export {
  addListItem,
  updateListItem,
  removeListItem,
  setItemEditing,
};
