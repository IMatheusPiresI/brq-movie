import React from 'react';
import { KeyboardAvoidingView, Platform } from 'react-native';
import { IProps } from './types';

export const KeyboardAvoid: React.FC<IProps> = ({ children }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}>
      {children}
    </KeyboardAvoidingView>
  );
};
