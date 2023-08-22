import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.neutral};
`;

export const SafeAreaContent = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
`;

export const LogoImage = styled.Image`
  margin-top: 68px;
  margin-bottom: 68px;
  width: 224px;
  height: 224px;
`;

export const BoxForm = styled.View`
  flex: 1;
  width: 100%;
  padding: 0 16px;
`;

export const BoxInputForm = styled.View`
  margin-top: 48px;
`;
