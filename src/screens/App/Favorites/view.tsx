import { ListFilms } from '@src/components/ListFilms';
import React from 'react';

import * as S from './styles';
import { IViewProps } from './types';

const FavoritesView: React.FC<IViewProps> = () => {
  return (
    <S.Container>
      <ListFilms films={[]} />
    </S.Container>
  );
};

export default FavoritesView;
