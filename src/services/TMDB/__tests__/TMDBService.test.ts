import { mockListFilm } from '@src/resources/mock/mockListFilm';
import { apiTMDB } from '@src/services';
import { TMDBService } from '..';
import { ITMDBFilm } from '../types';

describe('TMDB Service test and mock data', () => {
  it('should be render list films', async () => {
    const spyFn = jest
      .spyOn(apiTMDB, 'get')
      .mockResolvedValue({ data: mockListFilm, status: 200 });

    const result: ITMDBFilm[] = await TMDBService.getMoviesList();

    expect(result[0].name).toBe('Lei & Ordem');
    expect(result.length).toBe(2);

    expect(spyFn).toBeCalledTimes(1);
  });
});
