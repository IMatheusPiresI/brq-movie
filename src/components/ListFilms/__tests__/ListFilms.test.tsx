import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { TestProvider } from '@src/resources/helpers/testProvider/testProvider';
import { ListFilms } from '..';
import { mockListFilm } from '@src/resources/mock/mockListFilm';

describe('ListFilms Tests', () => {
  beforeEach(() => {
    render(
      <TestProvider>
        <ListFilms films={mockListFilm} />
      </TestProvider>,
    );
  });

  it('should be render empty message', () => {
    render(
      <TestProvider>
        <ListFilms films={[]} />
      </TestProvider>,
    );

    expect(screen.getByText('Nenhum filme, encontrado!')).toBeTruthy();
  });

  it('should be render quatity data correct', () => {
    const items = screen.queryAllByTestId('image-film');
    expect(items.length).toBe(mockListFilm.length);
  });
});
