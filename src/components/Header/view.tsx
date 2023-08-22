import React from 'react';
import { IViewProps } from './types';

import * as S from './styles';

import OptionsSVG from '@assets/svg/options.svg';

const HeaderView: React.FC<IViewProps> = ({ safeMarginTop }) => {
  return (
    <S.Container safeMarginTop={safeMarginTop}>
      <S.TitleApp numberOfLines={1}>BRQ Movies</S.TitleApp>
      <S.ButtonOptions activeOpacity={0.7}>
        <OptionsSVG />
      </S.ButtonOptions>
    </S.Container>
  );
};

export default HeaderView;
