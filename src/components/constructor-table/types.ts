import { MixedValueTypes } from '@apptypes/components';

export type ConstructorTableProps = {
    state: [];
}

export type TableRowProps = {
    value: MixedValueTypes;
    index: number;
}

export type UpdateListProps = (
    updatePayload: { [index: string]: string }
  ) => void;
