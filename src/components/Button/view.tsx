import React from 'react';
import { IViewProps } from './types';

import * as S from './styles';
const Button: React.FC<IViewProps> = ({ title, variant, ...rest }) => {
  return (
    <S.Button {...rest} variant={variant} testID="button">
      <S.Title disabled={rest.disabled} variant={variant}>
        {title}
      </S.Title>
    </S.Button>
  );
};

export default Button;
