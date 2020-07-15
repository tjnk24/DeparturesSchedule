import * as Yup from 'yup';

import { YupShapeTypes, SchemaTypes, YupPasswordType } from '../types';

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
    .when(
      '$requirePassword',
      (required, schema) => (
        required === false
          ? schema.trim().min(6)
          : schema.trim().min(6).required('please, enter your password')
      ),
    ),
  // password: (isRequired) => {
  //   let passwordValidation = Yup.string().trim().min(6);

  //   if (isRequired !== false) {
  //     passwordValidation = passwordValidation.required('please, enter your password');
  //   }

  //   return passwordValidation;
  // },
  repeatPassword: Yup.string()
    .when(
      '$requirePassword',
      (required, schema) => (
        required !== false
          ? schema.oneOf([Yup.ref('password'), undefined], 'Passwords must match')
            .required('please, repeat your password')
          : schema.oneOf([Yup.ref('password'), undefined], 'Passwords must match')
      ),
    ),
    // .when(['password', '$passwordRequired'], {
    //   is: (value, required) => {
    //     console.log(value, required);
    //     return value && required && value.length > 0;
    //   },
    //   then: Yup.string()
    //     .oneOf([Yup.ref('password'), undefined], 'Passwords must match')
    //     .required('please, repeat your password'),
    //   otherwise: Yup.string()
    //     .oneOf([Yup.ref('password'), undefined], 'Passwords must match'),
    // }),
};

const makeSchema: SchemaTypes = (inputs) => Yup.object()
  .shape(
    inputs.reduce((current, item) => {
      const tempCurrent: YupShapeTypes = current;

      tempCurrent[item] = YupShape[item];

      // if (item === 'password') {
      //   const password = YupShape[item] as YupPasswordType;
      //   tempCurrent[item] = password(requirePassword);
      // }
      return tempCurrent;
    }, {}),
  );

export default makeSchema;
