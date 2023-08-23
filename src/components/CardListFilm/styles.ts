import styled from 'styled-components/native';

export const Card = styled.TouchableOpacity`
  width: ${({ theme }) => theme.metrics.screenWidth / 2 - 24}px;
  height: 228px;
  border-radius: 8px;
  overflow: hidden;
`;

export const FilmImage = styled.Image`
  width: 100%;
  height: 100%;
`;
