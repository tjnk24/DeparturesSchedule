import { ValueTypes } from '@apptypes/components';

export type ConstructorTableProps = {
    state: ValueTypes[];
}

export type TableRowProps = {
    value: ValueTypes;
    index: number;
}

export type UpdateListProps = (
    updatePayload: { [index: string]: string }
  ) => void;
