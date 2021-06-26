import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Path
import SplashScreen from './Screens/SplashScreen/SplashScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen';
import BottonNavigation from './Components/BottomNavigation/BottonNavigation';
import SendPackage from './Screens/SendPackage';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
        headerShown: false
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="SendPackage" component={SendPackage} />
        <Stack.Screen name="BottonNavigation" component={BottonNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;