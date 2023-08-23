import { render, screen } from '@testing-library/react-native';
import React from 'react';
import { TestProvider } from '@src/resources/helpers/testProvider/testProvider';
import { KeyboardDismiss } from '..';
import { Text } from 'react-native';
describe('KeyboardDismiss Tests', () => {
  beforeEach(() => {
    render(
      <TestProvider>
        <KeyboardDismiss>
          <Text>Children</Text>
        </KeyboardDismiss>
      </TestProvider>,
    );
  });

  it('should be render children', () => {
    expect(screen.getByText('Children')).toBeTruthy();
  });
});
