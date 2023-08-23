import { ITMDBFilm } from '@src/services/TMDB/types';
import { ReactNode } from 'react';

type IChildren = {
  children: ReactNode;
};

type IFavoriteContext = {
  favoriteFilms: ITMDBFilm[];
  removeFilmToFavorite: (film: ITMDBFilm) => Promise<void>;
  addFilmToFavorite: (film: ITMDBFilm) => Promise<void>;
  addOrRemoveFilmToFavorites: (film: ITMDBFilm) => Promise<void>;
  checkIsExistFilmOnFavorite: (film: ITMDBFilm) => Promise<boolean | undefined>;
};

export type { IChildren, IFavoriteContext };
