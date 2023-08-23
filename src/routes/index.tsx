import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './Stack/stack.routes';
import SplashScreen from 'react-native-splash-screen';
import { FavoriteProvider } from '@src/contexts/Favorites/favorites';
import { NetInfoProvider } from '@src/contexts/NetInfo/netInfo';

export const AppRoutes = () => {
  return (
    <NavigationContainer
      onReady={() => {
        SplashScreen.hide();
      }}>
      <NetInfoProvider>
        <FavoriteProvider>
          <StackRoutes />
        </FavoriteProvider>
      </NetInfoProvider>
    </NavigationContainer>
  );
};
