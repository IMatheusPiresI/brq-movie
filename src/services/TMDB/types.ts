type IResultTMDBGetFilms = {
  page: number;
  results: ITMDBFilm[];
  total_pages: number;
  total_results: number;
};

type ITMDBFilm = {
  backdrop_path: string;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | undefined;
  vote_average: number;
  vote_count: number;
};

export type { IResultTMDBGetFilms, ITMDBFilm };
