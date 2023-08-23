import React from 'react';
import { StatusBar } from 'react-native';

import theme from '@src/resources/theme';
import { ThemeProvider } from 'styled-components/native';
import 'react-native-gesture-handler';
import { AppRoutes } from '@src/routes';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Toast, toastConfig } from '@resources/helpers/toast/config';

const App = () => (
  <ThemeProvider theme={theme}>
    <SafeAreaProvider>
      <AppRoutes />
      <StatusBar
        barStyle={'light-content'}
        translucent
        backgroundColor={'transparent'}
      />
      <Toast config={toastConfig} />
    </SafeAreaProvider>
  </ThemeProvider>
);

export default App;
