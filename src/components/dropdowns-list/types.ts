import { Dispatch, SetStateAction } from 'react';

type Values = 'country' | 'gate' | 'hours' | 'minutes';

type ValuesTypes = Record<Values, string>;

export type DropdownsListProps = {
    countries: string[];
    values   : ValuesTypes;
    gates    : { [index: string]: number };
    handler  : Dispatch<SetStateAction<ValuesTypes>>;
}

export type CountriesListProps = {
    countries: string[];
}

export type DropdownProps = {
    name           : string;
    value          : string;
    prevValues?    : ValuesTypes;
    onChangeHandler: Dispatch<SetStateAction<{ [index: string]: string }>>;
}

export type GatesListProps = {
    gates: { [index: string]: number };
}

export type TimeListProps = {
    timeValue: number;
}
