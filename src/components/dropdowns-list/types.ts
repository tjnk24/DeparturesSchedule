import { Dispatch, SetStateAction } from 'react';
import { StringObjectType } from '@apptypes/common';

type GatesType = { [index: string]: number }

type UseStateType = Dispatch<SetStateAction<StringObjectType>>

type DispatchFunctionType = (
    param: StringObjectType
) => void;

export type DropdownsListProps = {
    countries: string[];
    values   : StringObjectType;
    gates    : GatesType;
    handler  : UseStateType;
}

export type DropdownProps = {
    name           : string;
    value          : string;
    prevValues?    : StringObjectType;
    onChangeHandler: DispatchFunctionType | UseStateType;
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
