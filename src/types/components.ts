export type StringObjectType = { [index: string]: string }

export type ValueTypes = {
    country  : string;
    gate     : string;
    hours    : string;
    minutes  : string;
}

export type AdditionalTypes = {
    id       : number;
    isEditing: boolean;
}

export type MixedValueTypes = ValueTypes & AdditionalTypes;
