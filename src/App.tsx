import React from 'react';
import { StatusBar } from 'react-native';

import theme from '@src/resources/theme';
import { ThemeProvider } from 'styled-components/native';
import 'react-native-gesture-handler';
import { AppRoutes } from '@src/routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <AppRoutes />
    <StatusBar
      barStyle={'light-content'}
      translucent
      backgroundColor={'transparent'}
    />
  </ThemeProvider>
);

export default App;
