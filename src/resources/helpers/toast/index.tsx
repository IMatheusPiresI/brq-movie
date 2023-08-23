import Toast from 'react-native-toast-message';

export const showToastError = (text: string) => {
  Toast.show({
    type: 'error',
    text1: text,
    position: 'bottom',
    bottomOffset: 80,
    onPress: Toast.hide,
  });
};

export const showToastSuccess = (text: string) => {
  Toast.show({
    type: 'success',
    text1: text,
    position: 'bottom',
    bottomOffset: 80,
    onPress: Toast.hide,
  });
};
