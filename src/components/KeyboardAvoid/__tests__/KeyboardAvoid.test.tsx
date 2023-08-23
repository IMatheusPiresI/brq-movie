import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { TestProvider } from '@src/resources/helpers/testProvider/testProvider';
import { KeyboardAvoid } from '..';
import { Platform, Text } from 'react-native';
describe('KeyboardAvoid Tests', () => {
  beforeEach(() => {
    render(
      <TestProvider>
        <KeyboardAvoid>
          <Text>Children</Text>
        </KeyboardAvoid>
      </TestProvider>,
    );
  });

  it('should be render children', () => {
    expect(screen.getByText('Children')).toBeTruthy();
  });

  it('should be return correct flex style value', () => {
    const keyboardAvoidingView = screen.getByTestId('keyboard-view');

    expect(keyboardAvoidingView.props.style[0].flex).toBe(1);
  });
});
