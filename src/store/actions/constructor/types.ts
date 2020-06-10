import { StringObjectType, ValueTypes } from '@apptypes/components';

type ConstantType = { type: string }

type ValueType<K extends keyof ValueTypes> = Pick<ValueTypes, K>

export type addListItemTypes = (values: StringObjectType) => ConstantType & {
    payload: StringObjectType | ValueType<'isEditing'>;
}

export type updateListItemTypes = (id: number, updatePayload: StringObjectType) => ConstantType & {
    payload: StringObjectType | ValueType<'id'>;
}

export type removeListItemTypes = (id: number) => ConstantType & {
    payload: ValueType<'id'>;
}

export type setItemEditingTypes = (id: number, isEditing: boolean) => ConstantType & {
    payload: {
      id: number;
      isEditing: boolean;
    };
}
