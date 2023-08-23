import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.neutral};
`;

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const MessageLoading = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.NUNITO_BOLD};
  color: ${({ theme }) => theme.colors.secondary};
  text-align: center;
`;
