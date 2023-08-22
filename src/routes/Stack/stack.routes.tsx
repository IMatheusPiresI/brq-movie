import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import { Header } from '@src/components/Header';
import Home from '@src/screens/App/Home';
import SignIn from '@src/screens/Auth/SignIn';
import { TopTabRoutes } from '../Tabs/tabs.routes';

const Stack = createStackNavigator();

const stackOptions: StackNavigationOptions = {
  headerShown: false,
};

const StackAuth = () => (
  <Stack.Navigator screenOptions={stackOptions}>
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

const StackApp = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Home"
      component={TopTabRoutes}
      options={{
        header: () => <Header />,
      }}
    />
  </Stack.Navigator>
);

export const StackRoutes = () => (
  <Stack.Navigator screenOptions={stackOptions}>
    <Stack.Screen name="Authentication" component={StackAuth} />
    <Stack.Screen name="AppRoutes" component={StackApp} />
  </Stack.Navigator>
);
