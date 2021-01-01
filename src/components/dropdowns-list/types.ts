import { Dispatch, SetStateAction } from 'react';
import { Item } from '@apptypes/common';

type GatesType = { [index: string]: number }

type UseStateType = Dispatch<SetStateAction<Item>>

type DispatchFunctionType = (param: Item) => void;

export type DropdownsListProps = {
    countries: string[];
    values   : Item;
    gates    : GatesType;
    handler  : UseStateType;
}

export type DropdownProps = {
    name           : string;
    value          : string;
    prevValues?    : Item;
    onChangeHandler: DispatchFunctionType | Dispatch<SetStateAction<Item>>;
}

export type CountriesListProps = {
    countries: string[];
}

export type GatesListProps = {
    gates: GatesType;
}

export type TimeListProps = {
    timeValue: number;
}
