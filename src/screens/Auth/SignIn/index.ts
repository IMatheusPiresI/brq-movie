import { ITypeAuthInput } from '@src/components/InputAuth/types';
import { useFormik } from 'formik';
import React, { createElement } from 'react';
import { IFormSignInValues, IViewProps } from './types';

import View from './view';

const SignIn: React.FC = () => {
  const formik = useFormik<IFormSignInValues>({
    initialValues: {
      user: '',
      password: '',
    },
    onSubmit: (values) => handleSubmitLogin(values),
  });

  const handleSubmitLogin = (values: IFormSignInValues) => {
    console.log(values);
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
