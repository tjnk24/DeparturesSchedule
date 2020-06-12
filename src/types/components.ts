export type StringObjectType = { [index: string]: string }

export type ValueTypes = {
    country   : string;
    gate      : string;
    hours     : string;
    minutes   : string;
    id        : number;
    isEditing : boolean;
}

export type AppPropsTypes = {
    countries: string[];
    gates: { [index: string]: number };
    loading: boolean;
}

export type PayloadType = { [index: string]: string | number | boolean }

export type MixedValueTypes = ValueTypes | PayloadType;
