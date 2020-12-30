import { Items } from '@apptypes/common';

export type ConstructorTableProps = {
    state: Items[];
}

export type TableRowProps = {
    value: Items;
    index: number;
}

export type UpdateListProps = (
    updatePayload: { [index: string]: string }
  ) => void;
