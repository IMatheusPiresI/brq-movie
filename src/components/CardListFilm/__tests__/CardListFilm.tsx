import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { TestProvider } from '@src/resources/helpers/testProvider/testProvider';
import { CardListFilm } from '..';
import { mockFilm, mockFilmWithoutPoster } from '@src/resources/mock/mockFIlm';
describe('CardListFilm Tests', () => {
  beforeEach(() => {
    render(
      <TestProvider>
        <CardListFilm film={mockFilm} />
      </TestProvider>,
    );
  });

  it('should be render image film', () => {
    const image = screen.getByTestId('image-film');

    const imageURL = image.props.source.uri;

    expect(imageURL).toBe(
      `https://image.tmdb.org/t/p/w500${mockFilm.poster_path}`,
    );

    expect(imageURL).not.toBe(
      `https://image.tmdb.org/t/p/w500${mockFilm.backdrop_path}`,
    );
  });

  it('should be click on button and navigate', () => {
    const buttonCard = screen.getByTestId('button-card-film');

    fireEvent.press(buttonCard);
  });

  it('should be render backdrop', () => {
    render(
      <TestProvider>
        <CardListFilm film={mockFilmWithoutPoster} />
      </TestProvider>,
    );
    const image = screen.getByTestId('image-film');

    const imageURL = image.props.source.uri;

    expect(imageURL).toBe(
      `https://image.tmdb.org/t/p/w500${mockFilmWithoutPoster.backdrop_path}`,
    );

    expect(imageURL).not.toBe(
      `https://image.tmdb.org/t/p/w500${mockFilmWithoutPoster.poster_path}`,
    );
  });
});
