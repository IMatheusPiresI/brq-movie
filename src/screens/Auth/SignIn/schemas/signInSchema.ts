import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  user: yup.string().required('Digite seu nome'),
  password: yup.string().required('Digite sua senha'),
});
