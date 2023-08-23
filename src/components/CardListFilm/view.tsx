import React from 'react';
import { IViewProps } from './types';

import * as S from './styles';

const CardListFilmView: React.FC<IViewProps> = ({ film, handleShowFilm }) => {
  return (
    <S.Card
      activeOpacity={0.7}
      onPress={handleShowFilm}
      testID="button-card-film">
      <S.FilmImage
        testID="image-film"
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
