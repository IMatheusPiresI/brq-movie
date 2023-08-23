import Animated from 'react-native-reanimated';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
`;

export const InputContainer = styled(Animated.View)`
  width: 100%;
  height: 56px;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.secondary};
`;

export const InputText = styled.TextInput`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.ROBOTO_REGULAR};
  font-size: 16px;
  padding-top: 14px;
  padding-left: 48px;
  padding-right: 48px;
`;

export const Label = styled(Animated.Text)`
  font-size: 16px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.ROBOTO_REGULAR};
  position: absolute;
  left: 48px;
`;

export const Error = styled(Animated.Text)`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.ROBOTO_REGULAR};
  color: ${({ theme }) => theme.colors.error};
`;

export const BoxIcon = styled.View`
  position: absolute;
  left: 12px;
`;

export const ButtonClearInput = styled.Pressable`
  position: absolute;
  right: 12px;
`;
