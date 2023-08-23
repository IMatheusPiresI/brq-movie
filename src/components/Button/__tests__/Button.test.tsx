import { fireEvent, render, screen } from '@testing-library/react-native';
import React from 'react';
import { TestProvider } from '@src/resources/helpers/testProvider/testProvider';
import { Button } from '..';
import theme from '@src/resources/theme';
describe('Button Tests', () => {
  const mockPress = jest.fn();

  beforeEach(() => {
    render(
      <TestProvider>
        <Button title="Entrar" onPress={mockPress} />
      </TestProvider>,
    );
  });

  it('should be render title button', () => {
    expect(screen.getByText('Entrar')).toBeTruthy();
  });

  it('should be called button onPress', () => {
    const button = screen.getByTestId('button');

    fireEvent.press(button);

    expect(mockPress).toHaveBeenCalled();
  });

  it('should be test style disabled', () => {
    render(
      <TestProvider>
        <Button title="Entrar" disabled />
      </TestProvider>,
    );
    const button = screen.getByTestId('button');

    expect(button.props.style.backgroundColor).toBe(theme.colors.gray);
  });

  it('should be change text color on variant secondary', () => {
    render(
      <TestProvider>
        <Button title="Entrar" disabled variant="secondary" />
      </TestProvider>,
    );

    const label = screen.getByText('Entrar');
    expect(label.props.style[0].color).toBe(theme.colors.secondary);
  });
});
