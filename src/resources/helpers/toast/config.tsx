import ToastError from '@src/components/Toast/ToastError';
import Toast, { BaseToastProps } from 'react-native-toast-message';

export type AppBaseToastProp = BaseToastProps;

const toastConfig = {
  error: (props: AppBaseToastProp) => <ToastError {...props} />,
};

export { Toast, toastConfig };
