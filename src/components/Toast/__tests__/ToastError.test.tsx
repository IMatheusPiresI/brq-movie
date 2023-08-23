import { TestProvider } from '@src/resources/helpers/testProvider/testProvider';
import { fireEvent, render, screen } from '@testing-library/react-native';
import React = require('react');
import ToastError from '../ToastError';

describe('ToastError Tests, Verify Click, Render Texts', () => {
  const mockOnPress = jest.fn();
  beforeEach(() => {
    render(
      <TestProvider>
        <ToastError text1="Erro ao adicionar filme!" onPress={mockOnPress} />,
      </TestProvider>,
    );
  });

  it('should be render text1', () => {
    expect(screen.getByText('Erro ao adicionar filme!')).toBeTruthy();
  });

  it('should be valid onPress toas have been called', async () => {
    const buttonToast = screen.getByTestId('toast-error-button');

    fireEvent.press(buttonToast);

    expect(mockOnPress).toHaveBeenCalled();
  });
});
