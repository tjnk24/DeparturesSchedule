import * as Yup from 'yup';

export type YupShapeTypes = { [key: string] : Yup.StringSchema<string | undefined> }

export type SchemaTypes = (
  inputs: string[]
) => Yup.ObjectSchema<Record<string, unknown> | undefined>
