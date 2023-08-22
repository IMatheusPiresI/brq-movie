import React from 'react';

import theme from '@src/resources/theme';
import { ThemeProvider } from 'styled-components/native';
import 'react-native-gesture-handler';
import { AppRoutes } from '@src/routes';

const App = () => (
  <ThemeProvider theme={theme}>
    <AppRoutes />
  </ThemeProvider>
);

export default App;
