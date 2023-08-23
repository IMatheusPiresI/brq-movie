import { ITMDBFilm } from '@src/services/TMDB/types';

type IViewProps = {
  films: ITMDBFilm[];
  loading: boolean;
};

export type { IViewProps };
