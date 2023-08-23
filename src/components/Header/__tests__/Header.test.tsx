import React from 'react';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import { Header } from '..';
import { TestProvider } from '@src/resources/helpers/testProvider/testProvider';

describe('Header Render And Functionality Tests', () => {
  beforeEach(() => {
    render(
      <TestProvider>
        <Header />
      </TestProvider>,
    );
  });

  it('should be render Title App', () => {
    expect(screen.getByText('BRQ Movies')).toBeTruthy();
  });

  it('should be show options on click dots', async () => {
    const buttonOptions = screen.getByTestId('show-options');
    const renderOptions = screen.findByText('Sair');
    const renderIconOptions = screen.getByTestId('icon-show-options');

    fireEvent.press(buttonOptions);

    await waitFor(() => {
      expect(renderOptions).toBeTruthy();
      expect(renderIconOptions).toBeTruthy();
    });

    const buttonCloseOptions = screen.getByTestId('close-options');

    fireEvent.press(buttonCloseOptions);
    await waitFor(async () => {
      expect(screen.queryByText('Sair')).toBeNull();
    });
  });

  it('should be called logout function', async () => {
    const buttonOptions = screen.getByTestId('show-options');
    const renderOptions = screen.findByText('Sair');
    fireEvent.press(buttonOptions);

    await waitFor(() => {
      expect(renderOptions).toBeTruthy();
    });

    const buttonCloseOptions = screen.getByTestId('option-logout');

    fireEvent.press(buttonCloseOptions);

    await waitFor(async () => {
      expect(screen.queryByText('Sair')).toBeNull();
    });
  });
});
