import { FavoriteContext } from '@src/contexts/favorites';
import { useContext } from 'react';

export const useFavorite = () => {
  const favorite = useContext(FavoriteContext);

  return favorite;
};
