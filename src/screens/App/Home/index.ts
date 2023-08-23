import { showToastError } from '@src/resources/helpers/toast';
import { TMDBService } from '@src/services/TMDB';
import { IResultTMDBGetFilms, ITMDBFilm } from '@src/services/TMDB/types';
import React, { createElement, useCallback, useEffect, useState } from 'react';
import { IViewProps } from './types';

import View from './view';

const Home: React.FC = () => {
  const [films, setFilms] = useState<ITMDBFilm[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const getFilmsList = useCallback(async () => {
    setLoading(true);
    try {
      const result: IResultTMDBGetFilms = await TMDBService.getMoviesList();
      setFilms(result.results);
    } catch (err) {
      showToastError('Erro ao buscar listagem dos filmes, tente novamente!');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getFilmsList();
  }, [getFilmsList]);

  const viewProps: IViewProps = {
    films,
    loading,
  };

  return createElement(View, viewProps);
};

export default Home;
