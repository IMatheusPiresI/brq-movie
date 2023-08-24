import { useNavigation } from '@react-navigation/native';
import React, { createElement, useCallback } from 'react';
import { IProps, IViewProps } from './types';

import View from './view';

export const CardListFilm: React.FC<IProps> = ({ film }) => {
  const navigation = useNavigation();

  const handleShowFilm = () => {
    navigation.navigate('Film', {
      film,
    });
  };

  const getUrlImage = useCallback(() => {
    if (film.poster_path && film.poster_path !== '')
      return `https://image.tmdb.org/t/p/w500${film.poster_path}`;
    if (film.backdrop_path && film.backdrop_path !== '')
      return `https://image.tmdb.org/t/p/w500${film.poster_path}`;

    return 'https://static.vecteezy.com/system/resources/previews/005/337/799/original/icon-image-not-found-free-vector.jpg';
  }, [film.poster_path, film.backdrop_path]);

  const viewProps: IViewProps = {
    film,
    getUrlImage,
    handleShowFilm,
  };
  return createElement(View, viewProps);
};
