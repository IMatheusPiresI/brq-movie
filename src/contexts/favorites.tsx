import { showToastError } from '@src/resources/helpers/toast';
import { useAsyncStorageToFavorites } from '@src/resources/hooks/useAsyncStorageToFavorites';
import { ITMDBFilm } from '@src/services/TMDB/types';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { IChildren, IFavoriteContext } from './types';

const FavoriteContext = createContext<IFavoriteContext>({} as IFavoriteContext);

const FavoriteProvider: React.FC<IChildren> = ({ children }) => {
  const [favoriteFilms, setFavoriteFilms] = useState<ITMDBFilm[]>([]);

  const {
    addNewFilmToFavorites,
    getAllFilmsSavedToFavorites,
    removeFilmToFavorites,
    checkFilmExistOnFavorite,
  } = useAsyncStorageToFavorites();

  const addFilmToFavorite = async (film: ITMDBFilm) => {
    try {
      await addNewFilmToFavorites(film);
      setFavoriteFilms((prevState) => [...prevState, film]);
    } catch (err) {
      showToastError('Erro ao adicionar filme como favorito, tente novamente!');
    }
  };

  const removeFilmToFavorite = async (film: ITMDBFilm) => {
    try {
      await removeFilmToFavorites(film);
      setFavoriteFilms((prevState) =>
        prevState.filter((prevFilm) => prevFilm.id !== film.id),
      );
    } catch (err) {
      showToastError('Erro ao remover filme dos favoritos, tente novamente!');
    }
  };

  const checkIsExistFilmOnFavorite = async (film: ITMDBFilm) => {
    try {
      const result = await checkFilmExistOnFavorite(film);

      return result;
    } catch (err) {
      showToastError('Erro ao remover filme dos favoritos, tente novamente!');
    }
  };

  const addOrRemoveFilmToFavorites = async (film: ITMDBFilm) => {
    const isAlreadyExist = await checkIsExistFilmOnFavorite(film);

    if (isAlreadyExist) {
      await removeFilmToFavorite(film);
      return;
    }

    await addFilmToFavorite(film);
  };
  const getAllFilmsToFavorite = useCallback(async () => {
    const result = await getAllFilmsSavedToFavorites();

    if (result) {
      setFavoriteFilms(result);
    }
  }, []);

  useEffect(() => {
    getAllFilmsToFavorite();
  }, [getAllFilmsToFavorite]);

  return (
    <FavoriteContext.Provider
      value={{
        favoriteFilms,
        removeFilmToFavorite,
        addFilmToFavorite,
        checkIsExistFilmOnFavorite,
        addOrRemoveFilmToFavorites,
      }}>
      {children}
    </FavoriteContext.Provider>
  );
};

export { FavoriteProvider, FavoriteContext };
