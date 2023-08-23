import { TMDBService } from '@src/services/TMDB';
import { IResultTMDBGetFilms, ITMDBFilm } from '@src/services/TMDB/types';
import React, { createElement, useCallback, useEffect, useState } from 'react';
import { IViewProps } from './types';

import View from './view';

const Home: React.FC = () => {
  const [films, setFilms] = useState<ITMDBFilm[]>([]);
  const getFilmsList = useCallback(async () => {
    try {
      const result: IResultTMDBGetFilms = await TMDBService.getMoviesList();

      setFilms(result.results);
    } catch (err) {
      console.log(err);
    }
  }, []);

  useEffect(() => {
    getFilmsList();
  }, [getFilmsList]);

  const viewProps: IViewProps = {
    films,
  };

  return createElement(View, viewProps);
};

export default Home;
