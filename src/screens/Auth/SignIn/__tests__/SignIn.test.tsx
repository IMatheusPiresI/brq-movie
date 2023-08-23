import { TestProvider } from '@src/resources/helpers/testProvider/testProvider';
import theme from '@src/resources/theme';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import { act } from 'react-test-renderer';
import SignIn from '..';

describe('SignIn Tests - Valide Form, Flux disables', () => {
  beforeEach(() => {
    render(
      <TestProvider>
        <SignIn />
      </TestProvider>,
    );
  });

  it('should be render logo App BRQMovies', () => {
    const logo = screen.getByTestId('logo-app');

    expect(logo).toBeTruthy();
  });

  it('should be render forms and buttons', () => {
    const inputs = screen.queryAllByTestId('input-auth');
    const buttons = screen.queryAllByTestId('button');

    expect(inputs).toBeTruthy();
    expect(buttons).toBeTruthy();
  });

  it('should be init disable and valide filds enabable button login', async () => {
    const buttons = screen.queryAllByTestId('button');
    const inputs = screen.queryAllByTestId('input-auth');
    expect(buttons[0].props.accessibilityState.disabled).toBeTruthy();
    expect(buttons[0].props.style.backgroundColor).toBe(theme.colors.gray);

    await act(() => {
      fireEvent.changeText(inputs[0], 'user');
      fireEvent.changeText(inputs[1], '123');
    });

    expect(inputs[0].props.value).toBe('user');
    expect(inputs[1].props.value).toBe('123');

    await act(() => {
      fireEvent.press(buttons[0]);
    });

    expect(
      screen.queryByText(
        'Credenciais inválidas, verique suas informações e tente novamente!',
      ),
    ).toBeFalsy();
  });

  it('should be show toast erro on try enter with invalid credentials', async () => {
    const buttons = screen.queryAllByTestId('button');
    const inputs = screen.queryAllByTestId('input-auth');

    fireEvent.changeText(inputs[0], 'userWrong');
    fireEvent.changeText(inputs[1], '12345');

    await act(() => {
      fireEvent.press(buttons[0]);
    });

    await waitFor(() => {
      expect(
        screen.findByText(
          'Credenciais inválidas, verique suas informações e tente novamente!',
        ),
      ).toBeTruthy();
    });
  });

  it('should be clearInput on click clear button', async () => {
    const inputs = screen.queryAllByTestId('input-auth');
    const inputButtonClear = screen.queryAllByTestId('input-auth-clear');
    fireEvent.changeText(inputs[0], 'userWrong');

    await act(() => {
      fireEvent.press(inputButtonClear[0]);
    });

    expect(inputs[0].props.value).toBe('');
  });
});
