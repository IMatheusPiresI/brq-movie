import {
  createStackNavigator,
  StackNavigationOptions,
} from '@react-navigation/stack';
import SignIn from '@src/screens/Auth/SignIn';

const Stack = createStackNavigator();

const stackOptions: StackNavigationOptions = {
  headerShown: false,
};

const StackAuth = () => (
  <Stack.Navigator screenOptions={stackOptions}>
    <Stack.Screen name="SignIn" component={SignIn} />
  </Stack.Navigator>
);

// const StackApp = () => {
//   <Stack.Navigator>
//   <Stack.Screen name="Home" component={Home} />
// </Stack.Navigator>
// }

export const StackRoutes = () => (
  <Stack.Navigator screenOptions={stackOptions}>
    <Stack.Screen name="Authentication" component={StackAuth} />
  </Stack.Navigator>
);
