import * as Yup from 'yup';

import { YupShapeTypes, SchemaTypes, YupPasswordType } from './types';

const YupShape: YupShapeTypes = {
  username: Yup.string()
    .min(5)
    .max(10)
    .trim()
    .required('please, enter your username'),
  email: Yup.string()
    .email()
    .required('please, enter your email'),
  password: (isRequired) => {
    let passwordValidation = Yup.string().trim().min(6);

    if (isRequired === true || isRequired === undefined) {
      passwordValidation = passwordValidation.required('please, enter your password');
    }

    return passwordValidation;
  },
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match'),
};

const makeSchema: SchemaTypes = (inputs, requirePassword) => Yup.object()
  .shape(
    inputs.reduce((current, item) => {
      const tempCurrent: YupShapeTypes = current;

      tempCurrent[item] = YupShape[item];

      if (item === 'password') {
        const password = YupShape[item] as YupPasswordType;
        tempCurrent[item] = password(requirePassword);
      }
      return tempCurrent;
    }, {}),
  );

export default makeSchema;
