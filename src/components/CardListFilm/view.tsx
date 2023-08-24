import React from 'react';
import { IViewProps } from './types';

import * as S from './styles';

const CardListFilmView: React.FC<IViewProps> = ({
  film,
  handleShowFilm,
  getUrlImage,
}) => {
  return (
    <S.Card
      activeOpacity={0.7}
      onPress={handleShowFilm}
      testID="button-card-film">
      <S.FilmImage
        testID="image-film"
        source={{
          uri: getUrlImage(),
        }}
      />
    </S.Card>
  );
};

export default CardListFilmView;
