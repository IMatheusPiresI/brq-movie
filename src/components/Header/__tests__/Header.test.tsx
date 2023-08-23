import React from 'react';
import { render, screen } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '@src/resources/theme';
import { Header } from '..';

it('should be render Title App', () => {
  render(
    <ThemeProvider theme={theme}>
      <Header />
    </ThemeProvider>,
  );

  expect(screen.getByText('BRQ Movies')).toBeTruthy();
});
