import { Item } from '@apptypes/common';

export type ConstructorTableProps = {
    items: Item[];
}

export type TableRowProps = {
    value: Item;
    index: number;
}

export type UpdateListProps = (
    updatePayload: Item
  ) => void;
