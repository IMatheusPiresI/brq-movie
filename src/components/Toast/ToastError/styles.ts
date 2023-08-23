import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 90%;
  height: 60px;
  justify-content: center;
  padding: 0 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.error};
`;

export const TitleToastError = styled.Text`
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.NUNITO_BOLD};
  font-size: 14px;
`;
