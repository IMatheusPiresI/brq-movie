import { ITMDBFilm } from '@src/services/TMDB/types';

type IProps = {
  films: ITMDBFilm[];
};

type IViewProps = {
  films: ITMDBFilm[];
};

export type { IProps, IViewProps };
