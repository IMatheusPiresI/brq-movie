import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';
import { ISafeAreaHeaderTop } from './types';

export const ContainerFilm = styled.View`
  flex: 1;
`;
export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.neutral};
`;

export const BoxFilmPoster = styled.View`
  width: 100%;
  height: ${({ theme }) => theme.metrics.screenHeight * 0.7}px;
`;

export const ImagePoster = styled.Image`
  width: 100%;
  height: 100%;
`;

export const Content = styled.View`
  margin: 32px 16px;
`;

export const TitleFilm = styled.Text`
  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.NUNITO_BOLD};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const TitleSinopse = styled.Text`
  font-size: 14px;
  text-transform: uppercase
  font-family: ${({ theme }) => theme.fonts.NUNITO_BOLD};
  color: ${({ theme }) => theme.colors.primary};
  margin: 16px 0 
`;

export const Sinopse = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.NUNITO_REGULAR};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const BoxFilmInfo = styled.View`
  width: 100%;
  margin-top: 32px;
  gap: 16px;
`;

export const BoxRowLabel = styled.View`
  flex-direction: row;
  gap: 16px;
`;
export const BoxRowHeaderLabel = styled.View`
  flex-direction: row;
  gap: 8px;
  align-items: center;
  margin-bottom: 8px;
`;

export const BoxLabel = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.tertiary};
  border-radius: 8px;
  padding: 8px;
`;

export const TitleBoxLabel = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.NUNITO_BOLD};
  color: ${({ theme }) => theme.colors.primary};
`;
export const ValueBoxLabel = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.NUNITO_BOLD};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Header = styled.View<ISafeAreaHeaderTop>`
  width: 100%;
  position: absolute;
  padding-top: ${({ safeAreaTop }) => safeAreaTop + 16}px;
  padding-bottom: 16px;
  align-items: center;
  background: transparent;
  gap: 4px;
  top: 0;
  z-index: 99;
`;
export const BoxHeaderTransparent = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  background: transparent;
  padding: 0 16px;
  z-index: 20;
`;

export const ButtonGoBack = styled.TouchableOpacity``;

export const TitleHeader = styled.Text`
  font-size: 20px;
  flex: 1;
  font-family: ${({ theme }) => theme.fonts.NUNITO_BOLD};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;

export const ButtonFavorite = styled.TouchableOpacity``;

export const BoxHeaderBackground = styled(Animated.View)<ISafeAreaHeaderTop>`
  width: 100%;
  position: absolute;
  padding: 0 16px
  flex-direction: row;
  padding-top: ${({ safeAreaTop }) => safeAreaTop + 16}px;
  padding-bottom: 16px;
  align-items: center;
  background: ${({ theme }) => theme.colors.neutral};
  gap: 4px;
`;
