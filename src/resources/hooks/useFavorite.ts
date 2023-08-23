import { FavoriteContext } from '@src/contexts/Favorites/favorites';
import { useContext } from 'react';

export const useFavorite = () => {
  const favorite = useContext(FavoriteContext);

  return favorite;
};
