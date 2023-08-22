import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { IProps } from './types';

export const KeyboardDismiss: React.FC<IProps> = ({ children }) => {
  return (
    <TouchableWithoutFeedback touchSoundDisabled onPress={Keyboard.dismiss}>
      {children}
    </TouchableWithoutFeedback>
  );
};
