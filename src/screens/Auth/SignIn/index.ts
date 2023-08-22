import { useNavigation } from '@react-navigation/native';
import { ITypeAuthInput } from '@src/components/InputAuth/types';
import { useFormik } from 'formik';
import React, { createElement } from 'react';
import { signInSchema } from './schemas/signInSchema';
import { IFormSignInValues, IViewProps } from './types';

import View from './view';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formik = useFormik<IFormSignInValues>({
    initialValues: {
      user: '',
      password: '',
    },
    validationSchema: signInSchema,
    validateOnMount: true,
    onSubmit: (values) => handleSubmitLogin(values),
  });

  const handleSubmitLogin = (values: IFormSignInValues) => {
    navigation.navigate('AppRoutes');
  };

  const onClearInput = (type: ITypeAuthInput) => {
    formik.setFieldValue(type, '');
  };

  const viewProps: IViewProps = {
    onClearInput,
    formik,
  };

  return createElement(View, viewProps);
};

export default SignIn;
