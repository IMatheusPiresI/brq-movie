import { ITMDBFilm } from '@src/services/TMDB/types';

type IProps = {
  film: ITMDBFilm;
};

type IViewProps = {
  film: ITMDBFilm;
  getUrlImage: () => string;
  handleShowFilm: () => void;
};

export type { IProps, IViewProps };
