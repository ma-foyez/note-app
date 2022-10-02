import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { protectedRoutes } from './src/routes/ProtectedRoute';
import { publicRoutes } from './src/routes/PublicRoute';

const Stack = createNativeStackNavigator();

export default function App() {
  const user = false;
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {
          user ?
          protectedRoutes.map((route, index) => (
              <Stack.Screen key={index + 1} name={route.name} component={route.component} />
            ))
            : publicRoutes.map((route, index) => (
              <Stack.Screen key={index + 1} name={route.name} component={route.component} />
            ))
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}

