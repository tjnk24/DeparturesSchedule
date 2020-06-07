import { ValueTypes } from '@apptypes/components';

type AdditionalTypes = {
    id       : number;
    isEditing: boolean;
}

export type ConstructorTableProps = {
    state: [];
}

export type TableRowProps = {
    value: ValueTypes & AdditionalTypes;
    index: number;
}

export type UpdateListProps = (
    updatePayload: { [index: string]: string }
  ) => void;
