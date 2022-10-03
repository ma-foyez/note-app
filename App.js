import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { protectedRoutes } from './src/routes/ProtectedRoute';
import { publicRoutes } from './src/routes/PublicRoute';
import { useFonts } from 'expo-font';
import { enableScreens } from 'react-native-screens';
import Text from './src/theme/Text';
import FlashMessage from "react-native-flash-message";

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'GraphikRegular' : require('./assets/fonts/GraphikRegular.otf'),
    'GraphikMedium'  : require('./assets/fonts/GraphikMedium.otf'),
    'GraphikSemibold': require('./assets/fonts/GraphikSemibold.otf'),
    'GraphikBold'    : require('./assets/fonts/GraphikBold.otf'),
  })

  if (!loaded) {
    return <Text>Font is loading...</Text>
  }

  const user = false;
  return (
    <NavigationContainer style={{ paddingHorizontal: 20 }}>
      <Stack.Navigator>
        {
          user ?
            protectedRoutes.map((route, index) => (
              <Stack.Screen
                key={index + 1}
                name={route.name}
                component={route.component}
                options={{ headerShown: route.headerShown, title: route.title, headerTintColor: route.headerTintColor }}
              />
            ))
            : publicRoutes.map((route, index) => (
              <Stack.Screen
                key={index + 1}
                name={route.name}
                component={route.component}
                options={{ headerShown: route.headerShown, title: route.title, headerTintColor: route.headerTintColor }}
              />
            ))
        }
      </Stack.Navigator>
      <FlashMessage position="top" /> 
    </NavigationContainer>
  );
}

