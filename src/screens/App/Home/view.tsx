import { ListFilms } from '@src/components/ListFilms';
import React from 'react';

import * as S from './styles';
import { IViewProps } from './types';

const HomeView: React.FC<IViewProps> = ({ films, loading }) => {
  return (
    <S.Container>
      {loading ? (
        <S.ContainerLoading>
          <S.MessageLoading>Buscando Filmes...</S.MessageLoading>
        </S.ContainerLoading>
      ) : (
        <ListFilms films={films} />
      )}
    </S.Container>
  );
};

export default HomeView;
