import * as Yup from 'yup';

type YupStringType = Yup.StringSchema<string | undefined>
type YupBooleanType = Yup.BooleanSchema<boolean | undefined>

export type YupPasswordType = ((isRequired: boolean | undefined) => YupStringType);

export type YupShapeTypes = {
  // TODO: убрать boolean
  [key: string] : YupStringType | boolean | YupPasswordType;
}

export type SchemaTypes = (
  inputs          : string[],
  requierPassword : boolean | undefined
) => Yup.ObjectSchema<Record<string, unknown> | undefined>

export type ValidateHandlerTypes = { [key: string ]: string }
