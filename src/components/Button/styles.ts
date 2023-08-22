import styled, { css } from 'styled-components/native';
import { IButtonVariant } from './types';

export const Button = styled.TouchableOpacity<IButtonVariant>`
  width: 100%;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  border-radius: 100px;

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      width: auto;
      background-color: transparent;
      padding: 0 12px;
    `};

  ${({ disabled, variant }) =>
    disabled &&
    variant !== 'secondary' &&
    css`
      background-color: ${({ theme }) => theme.colors.gray};
    `}
`;

export const Title = styled.Text<IButtonVariant>`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  font-family: ${({ theme }) => theme.fonts.ROBOTO_MEDIUM};
  line-height: 20px;

  ${({ variant }) =>
    variant === 'secondary' &&
    css`
      color: ${({ theme }) => theme.colors.secondary};
    `};

  ${({ disabled, variant }) =>
    disabled &&
    variant !== 'secondary' &&
    css`
      color: ${({ theme }) => theme.colors.tertiary};
    `}
`;
