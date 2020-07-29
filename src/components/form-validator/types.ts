import * as Yup from 'yup';

type YupStringType = Yup.StringSchema<string | undefined>

export type YupShapeTypes = {
  [key: string] : YupStringType;
}

export type SchemaTypes = (
  inputs: string[]
) => Yup.ObjectSchema<Record<string, unknown> | undefined>
