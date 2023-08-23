import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { ISafeMarginTop } from './types';

export const Container = styled.View<ISafeMarginTop>`
  width: 100%;
  background: ${({ theme }) => theme.colors.neutral};
  padding-top: ${({ safeMarginTop }) => safeMarginTop + 18}px;
  padding-bottom: 18px;
  padding-left: 16px;
  padding-right: 16px;
  flex-direction: row;
`;

export const TitleApp = styled.Text`
  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.NUNITO_REGULAR};
  color: ${({ theme }) => theme.colors.secondary};
  line-height: 28px;
  flex: 1;
`;

export const ButtonOptions = styled.TouchableOpacity``;

export const ModalContent = styled.View`
  flex: 1;
`;

export const BoxOptions = styled(Animated.View)`
  width: 117px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  position: absolute;
`;

export const Option = styled.TouchableOpacity`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const LogoutTitle = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.NUNITO_REGULAR};
  color: ${({ theme }) => theme.colors.secondary};
  margin-left: 4px;
`;
