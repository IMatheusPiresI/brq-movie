import { NavigationContainer } from '@react-navigation/native';
import { FavoriteProvider } from '@src/contexts/Favorites/favorites';
import { NetInfoProvider } from '@src/contexts/NetInfo/netInfo';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../theme';
import { IProps } from './types';

export const TestProvider: React.FC<IProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>{children}</NavigationContainer>
    </ThemeProvider>
  );
};
