import AsyncStorage from '@react-native-async-storage/async-storage';
import { ITMDBFilm } from '@src/services/TMDB/types';
import { showToastError } from '../helpers/toast';

export const useAsyncStorageToFavorites = () => {
  const FAVORITE_KEY = '@BRQMovies-Favorites';

  const getAllFilmsSavedToFavorites = async () => {
    try {
      const value = await AsyncStorage.getItem(FAVORITE_KEY);

      const allFilms: ITMDBFilm[] | null =
        value != null ? JSON.parse(value) : null;

      return allFilms;
    } catch (err) {
      showToastError(
        'Erro ao buscar filmes salvos como favorito, tente novamente!',
      );
    }
  };

  const addNewFilmToFavorites = async (film: ITMDBFilm) => {
    try {
      const value = await AsyncStorage.getItem(FAVORITE_KEY);

      const allFilms: ITMDBFilm[] | null =
        value != null ? JSON.parse(value) : null;

      if (!allFilms) {
        await AsyncStorage.setItem(FAVORITE_KEY, JSON.stringify([film]));
        return;
      }
      await AsyncStorage.setItem(
        FAVORITE_KEY,
        JSON.stringify([...allFilms, film]),
      );
    } catch (err) {
      showToastError('Erro ao adicionar filme como favorito, tente novamente!');
    }
  };

  const removeFilmToFavorites = async (film: ITMDBFilm) => {
    try {
      const value = await AsyncStorage.getItem(FAVORITE_KEY);

      const allFilms: ITMDBFilm[] | null =
        value != null ? JSON.parse(value) : null;

      if (!allFilms || allFilms.length === 0) return;

      const newFilms = allFilms.filter((prevFilms) => prevFilms.id !== film.id);

      await AsyncStorage.setItem(FAVORITE_KEY, JSON.stringify(newFilms));
    } catch (err) {
      showToastError('Erro ao remove filme dos favoritos, tente novamente!');
    }
  };

  const checkFilmExistOnFavorite = async (film: ITMDBFilm) => {
    try {
      const value = await AsyncStorage.getItem(FAVORITE_KEY);

      const allFilms: ITMDBFilm[] | null =
        value != null ? JSON.parse(value) : null;

      if (!allFilms || allFilms.length === 0) return false;

      const existInListFavorite = allFilms.find(
        (filmOnList) => filmOnList.id === film.id,
      );

      return !!existInListFavorite;
    } catch (err) {
      showToastError('Erro ao verificar existência do filme, tente novamente!');
    }
  };

  return {
    getAllFilmsSavedToFavorites,
    addNewFilmToFavorites,
    removeFilmToFavorites,
    checkFilmExistOnFavorite,
  };
};
