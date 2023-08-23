import { ListFilms } from '@src/components/ListFilms';
import React from 'react';

import * as S from './styles';
import { IViewProps } from './types';

const HomeView: React.FC<IViewProps> = ({ films }) => {
  return (
    <S.Container>
      <ListFilms films={films} />
    </S.Container>
  );
};

export default HomeView;
