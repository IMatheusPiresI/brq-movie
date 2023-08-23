import { apiTMDB, API_KEY } from '..';

export const TMDBService = {
  getMoviesList: async () => {
    const result = await apiTMDB.get(
      `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`,
    );

    return result.data;
  },
};
