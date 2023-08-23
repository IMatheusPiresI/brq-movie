import React from 'react';
import { IViewProps } from './types';

import * as S from './styles';

import OptionsSVG from '@assets/svg/options.svg';

const CardListFilmView: React.FC<IViewProps> = ({ film }) => {
  return (
    <S.Card activeOpacity={0.7}>
      <S.FilmImage
        source={{
          uri: `https://image.tmdb.org/t/p/w500${
            film.poster_path ?? film.backdrop_path
          }`,
        }}
      />
    </S.Card>
  );
};

export default CardListFilmView;
