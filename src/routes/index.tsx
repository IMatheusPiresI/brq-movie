import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack/stack.routes';
import SplashScreen from 'react-native-splash-screen';
import { FavoriteProvider } from '@src/contexts/favorites';

export const AppRoutes = () => {
  return (
    <NavigationContainer
      onReady={() => {
        SplashScreen.hide();
      }}>
      <FavoriteProvider>
        <StackRoutes />
      </FavoriteProvider>
    </NavigationContainer>
  );
};
