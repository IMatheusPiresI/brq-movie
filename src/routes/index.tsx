import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack/stack.routes';

export const AppRoutes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};
