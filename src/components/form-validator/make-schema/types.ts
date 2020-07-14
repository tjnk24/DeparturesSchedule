import * as Yup from 'yup';

type YupSchemaType = Yup.StringSchema<string | undefined>

export type YupPasswordType = ((isRequired: boolean | undefined) => YupSchemaType);

export type YupShapeTypes = {
  [key: string] : YupSchemaType | YupPasswordType;
}

export type SchemaTypes = (
  inputs          : string[],
  requierPassword : boolean | undefined
) => Yup.ObjectSchema<Record<string, unknown> | undefined>
