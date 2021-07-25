import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import {NativeBaseProvider, Text, Box} from 'native-base';
//Path
import SplashScreen from './Screens/SplashScreen/SplashScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import RegisterScreenOne from './Screens/RegisterScreen/RegisterScreenOne';
import BottomNavigation from './Components/BottomNavigation/BottomNavigation';
import SendPackage from './Screens/GetSingleTransaction/GetSingleTransaction';
import store from './store';
import AddTransactionScreen from './Screens/AddTransactionScreen/AddTransactionScreen';
import ShowItemLocation from './Screens/TrackingScreen/ShowItemLocationScreen';
import RegisterScreenTwo from './Screens/RegisterScreen/RegisterScreenTwo';
import BottomNavigationAdmin from './Components/BottomNavigationAdmin/BottomNavigationAdmin';
import BottomNavigationDriver from './Components/BottomNavigationDriver/BottomNavigationDriver';
import EachItem from './Screens/EachItem/EachItem';
import DriveScreen from './Screens/DriveScreen/DriveScreen';
import ProfileScreen from './Screens/ProfileScreen/ProfileScreen';
// import 'app.css';
const Stack = createStackNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Splash" component={SplashScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="RegisterOne" component={RegisterScreenOne} />
            <Stack.Screen name="RegisterTwo" component={RegisterScreenTwo} />
            <Stack.Screen name="DriveScreen" component={DriveScreen} />
            <Stack.Screen name="SendPackage" component={SendPackage} />
            <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
            <Stack.Screen
              name="ShowItemLocation"
              component={ShowItemLocation}
            />
            <Stack.Screen name="EachItem" component={EachItem} />
            <Stack.Screen
              name="BottomNavigationDriver"
              component={BottomNavigationDriver}
            />
            <Stack.Screen
              name="BottomNavigation"
              component={BottomNavigation}
            />
            <Stack.Screen
              name="BottomNavigationAdmin"
              component={BottomNavigationAdmin}
            />
            <Stack.Screen
              name="AddTransaction"
              component={AddTransactionScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
