import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react-native';
import React from 'react';
import { TestProvider } from '@src/resources/helpers/testProvider/testProvider';
import InputAuth from '..';
import { KeyboardDismiss } from '@src/components/KeyboardDismiss';
describe('InputAuth Tests', () => {
  const mockClear = jest.fn();
  beforeEach(() => {
    render(
      <TestProvider>
        <InputAuth label="Email" onClear={mockClear} type="user" />
      </TestProvider>,
    );
  });

  it('should be render label and icon type user', () => {
    expect(screen.getByText('Email')).toBeTruthy();
    expect(screen.getByTestId('user-icon')).toBeTruthy();
  });

  it('should be focus on input and change layout', async () => {
    const iconUser = screen.getByTestId('user-icon');

    fireEvent.press(iconUser);
    const inputContainer = screen.getByTestId('input-container');

    await waitFor(() => {
      expect(inputContainer.props.animatedStyle.value.borderBottomColor).toBe(
        'rgba(236, 139, 0, 1)',
      );
    });
  });

  it('should be render icon password', () => {
    render(
      <TestProvider>
        <InputAuth label="Email" onClear={mockClear} type="password" />
      </TestProvider>,
    );

    expect(screen.getByTestId('password-icon')).toBeTruthy();
  });

  it('should be show error message', () => {
    render(
      <TestProvider>
        <InputAuth
          label="Email"
          onClear={mockClear}
          type="password"
          touched={true}
          error={'Campo obrigatório'}
        />
      </TestProvider>,
    );
    expect(screen.getByText('Campo obrigatório')).toBeTruthy();
  });

  it('should be execute clear action on click clear button', () => {
    const clearButton = screen.getByTestId('input-auth-clear');

    fireEvent.press(clearButton);

    expect(mockClear).toHaveBeenCalled();
  });

  it('should be have blur input and show error', async () => {
    render(
      <TestProvider>
        <KeyboardDismiss>
          <InputAuth
            label="Email"
            onClear={mockClear}
            type="password"
            touched={true}
            error={'Campo obrigatório'}
          />
        </KeyboardDismiss>
      </TestProvider>,
    );
    const inputContainer = screen.getByTestId('input-container');
    const outside = screen.getByTestId('input-auth-container');

    fireEvent.press(outside);

    await waitFor(() => {
      expect(inputContainer.props.animatedStyle.value.borderBottomColor).toBe(
        'rgba(255, 0, 0, 1)',
      );
    });
  });
});
