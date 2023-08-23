import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import theme from '@src/resources/theme';
import Favorites from '@src/screens/App/Favorites';
import Home from '@src/screens/App/Home';

const Tab = createMaterialTopTabNavigator();

export const TopTabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          fontFamily: theme.fonts.NUNITO_BOLD,
          fontSize: 16,
          lineHeight: 24,
        },
        tabBarIndicatorStyle: {
          backgroundColor: theme.colors.primary,
          height: 2,
        },
        tabBarInactiveTintColor: theme.colors.gray,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarStyle: {
          backgroundColor: theme.colors.neutral,
        },
      }}>
      <Tab.Screen name="Todos os Filmes" component={Home} />
      <Tab.Screen name="Favoritos" component={Favorites} />
    </Tab.Navigator>
  );
};
