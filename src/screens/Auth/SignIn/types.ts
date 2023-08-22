import { ITypeAuthInput } from '@src/components/InputAuth/types';
import { FormikContextType } from 'formik';

type IViewProps = {
  onClearInput: (type: ITypeAuthInput) => void;
  formik: FormikContextType<IFormSignInValues>;
};

type IFormSignInValues = {
  user: string;
  password: string;
};

export type { IViewProps, IFormSignInValues };
