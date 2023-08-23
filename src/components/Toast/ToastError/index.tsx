import React from 'react';
import { BaseToastProps } from 'react-native-toast-message';

import * as S from './styles';

const ToastError: React.FC<BaseToastProps> = ({ text1, onPress }) => (
  <S.Container onPress={onPress}>
    <S.TitleToastError>{text1}</S.TitleToastError>
  </S.Container>
);

export default ToastError;
