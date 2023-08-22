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
