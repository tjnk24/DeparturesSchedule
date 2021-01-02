import { Item } from '@apptypes/common';

export type ConstructorState = {
  headerText: string;
  items: Item[];
  isLoggedIn: boolean | null;
};
