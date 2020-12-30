import { Items } from '@apptypes/common';

export type ConstructorState = {
  headerText: string;
  items: Items[];
  isLoggedIn: boolean | null;
};
