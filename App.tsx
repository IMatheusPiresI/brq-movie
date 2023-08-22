import React from 'react';

import theme from '@src/resources/theme';
import { ThemeProvider } from 'styled-components';

const App = () => (
  <ThemeProvider theme={theme}>
    <></>
  </ThemeProvider>
);

export default App;
