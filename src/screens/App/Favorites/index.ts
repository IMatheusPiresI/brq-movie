import { useFavorite } from '@src/resources/hooks/useFavorite';
import React, { createElement } from 'react';
import { IViewProps } from './types';

import View from './view';

const Favorites: React.FC = () => {
  const { favoriteFilms } = useFavorite();
  const viewProps: IViewProps = {
    favoriteFilms,
  };

  return createElement(View, viewProps);
};

export default Favorites;
