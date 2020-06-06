import { Dispatch, SetStateAction } from 'react';

type Values = 'country' | 'gate' | 'hours' | 'minutes';

type ValuesTypes = Record<Values, string>;

export type DropdownsListProps = {
    values   : ValuesTypes;
    handler  : Dispatch<SetStateAction<ValuesTypes>>;
    countries: string[];
    gates    : string[];
}

export type DropdownProps = {
    name           : string;
    value          : string;
    prevValues?    : ValuesTypes;
    onChangeHandler: Dispatch<SetStateAction<{ [index: string]: string }>>;
}
