import * as Yup from 'yup';

const YupShape = {
  username: Yup.string()
    .min(5)
    .max(10)
    .trim()
    .required('please, enter your username'),
  email: Yup.string()
    .email()
    .required('please, enter your email'),
  password: Yup.string()
    .trim()
    .required('please, enter your password'),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords must match'),
};

const makeSchema = (inputs: string[]): {} => Yup.object()
  .shape(
    inputs.reduce((current, item) => {
      const tempCurrent = current;

      tempCurrent[item] = YupShape[item];
      return tempCurrent;
    }, {}),
  );


export default makeSchema;
