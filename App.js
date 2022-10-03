import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { protectedRoutes } from './src/routes/ProtectedRoute';
import { publicRoutes } from './src/routes/PublicRoute';
import { useFonts } from 'expo-font';
import { enableScreens } from 'react-native-screens';
import Text from './src/theme/Text';
import FlashMessage from "react-native-flash-message";
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth';
import { auth } from './src/config/firebaseConfig';
import { ActivityIndicator, View } from 'react-native';

enableScreens();
const Stack = createNativeStackNavigator();

export default function App() {

  const [loaded] = useFonts({
    'GraphikRegular': require('./assets/fonts/GraphikRegular.otf'),
    'GraphikMedium': require('./assets/fonts/GraphikMedium.otf'),
    'GraphikSemibold': require('./assets/fonts/GraphikSemibold.otf'),
    'GraphikBold': require('./assets/fonts/GraphikBold.otf'),
  })


  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true)
  // const user = false;
  useEffect(() => {
    const authSubscription = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLoading(false);
      } else {
        setUser(null);
      }
    })
    return authSubscription;
  }, [])

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator color="blue" size="large" />
      </View>
    )
  }
  // if (!loaded) {
  //   return <Text>Font is loading...</Text>
  // }

  return (
    <NavigationContainer style={{ paddingHorizontal: 20 }}>
      <Stack.Navigator>
        {
          user ?
            protectedRoutes.map((route, index) => (
              <Stack.Screen
                key={index + 1}
                name={route.name}
                // component={route.component}
                options={{ headerShown: route.headerShown, title: route.title, headerTintColor: route.headerTintColor }}
              >
                {(props) => <route.component  {...props} user={user} />}
              </Stack.Screen>
            ))
            : publicRoutes.map((route, index) => (
              <Stack.Screen
                key={index + 1}
                name={route.name}
                component={route.component}
                options={{ headerShown: route.headerShown, title: route.title, headerTintColor: route.headerTintColor }}
              ></Stack.Screen>
            ))
        }
      </Stack.Navigator>
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

