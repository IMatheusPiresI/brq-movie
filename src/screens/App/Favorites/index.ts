import { useAsyncStorageToFavorites } from '@src/resources/hooks/useAsyncStorageToFavorites';
import { useFavorite } from '@src/resources/hooks/useFavorite';
import React, {
  createElement,
  useCallback,
  useEffect,
  useLayoutEffect,
} from 'react';
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
