export type ConstructorTableProps = {
    state: [];
}

export type TableRowProps = {
    value: ValueTypes;
    index: number;
}

type ValueTypes = {
    id       : number;
    country  : string;
    gate     : string;
    hours    : string;
    minutes  : string;
    isEditing: boolean;
}
