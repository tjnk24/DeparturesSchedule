import * as Yup from 'yup';

import { YupShapeTypes, SchemaTypes } from '../types';

const YupShape: YupShapeTypes = {
  username: Yup.string()
    .min(5)
    .max(10)
    .trim()
    .required('please, enter your username'),
  email: Yup.string()
    .email()
    .required('please, enter your email'),
  password: Yup.string()
    .trim().min(6).required('please, enter your password'),
  repeatPassword: Yup.string()
    .oneOf(
      [Yup.ref('password'), undefined],
      'Passwords must match',
    )
    .required('please, repeat your password'),
};

const makeSchema: SchemaTypes = (inputs) => Yup.object()
  .shape(
    inputs.reduce((current, item) => {
      const tempCurrent: YupShapeTypes = current;

      tempCurrent[item] = YupShape[item];

      return tempCurrent;
    }, {}),
  );

export default makeSchema;
