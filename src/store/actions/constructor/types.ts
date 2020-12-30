import { Items } from '@apptypes/common';
import {
  ADD_LIST_ITEM,
  REMOVE_LIST_ITEM,
  REMOVE_STATE,
  SAVE_HEADER,
  SAVE_STATE,
  SET_LOGIN,
  UPDATE_LIST_ITEM,
} from '../constants';

export type AddListItem = {
    type: typeof ADD_LIST_ITEM;
    payload: Items & { isEditing: Items['isEditing'] };
}

export type UpdateListItem = {
    type: typeof UPDATE_LIST_ITEM;
    payload: Items & { id: Items['id'] };
}

export type RemoveListItem = {
    type: typeof REMOVE_LIST_ITEM;
    payload: { id: Items['id'] };
}

export type SetItemEditing = {
    type: typeof UPDATE_LIST_ITEM;
    payload: {
      id: Items['id'];
      isEditing: Items['isEditing'];
    };
}

export type SaveState = {
    type: typeof SAVE_STATE;
}

export type RemoveState = {
    type: typeof REMOVE_STATE;
}

export type SetLoggedIn = {
    type: typeof SET_LOGIN;
    payload: boolean;
}

export type SaveHeaderText = {
    type: typeof SAVE_HEADER;
    payload: string;
}

export type ConstructorActions = (
      AddListItem
    | UpdateListItem
    | RemoveListItem
    | SetItemEditing
    | SaveState
    | RemoveState
    | SetLoggedIn
    | SaveHeaderText
)
