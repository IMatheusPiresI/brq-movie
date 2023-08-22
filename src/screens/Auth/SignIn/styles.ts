import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.neutral};
`;

export const SafeAreaContent = styled.SafeAreaView`
  flex: 1;
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
`;

export const BoxImage = styled.View`
  flex: 1;
  margin-top: 68px;
  margin-bottom: 68px;
  max-height: 224px;
  justify-content: flex-end;
  align-items: center;
`;

export const LogoImage = styled.Image`
  width: 224px;
  height: 224px;
`;

export const BoxForm = styled.View`
  width: 100%;
  flex: 1;
  justify-content: flex-end;
`;

export const BoxFlex = styled.View`
  flex: 1;
`;

export const BoxInputForm = styled.View`
  margin: 48px 0;
`;

export const BoxButtonForgotPassword = styled.View`
  width: 100%;
  align-items: center;
  margin-top: 24px;
  flex: 1;
`;
