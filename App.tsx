import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
//Path
import SplashScreen from './Screens/SplashScreen/SplashScreen';
import LoginScreen from './Screens/LoginScreen/LoginScreen';
import RegisterScreen from './Screens/RegisterScreen/RegisterScreen';
import BottomNavigation from './Components/BottomNavigation/BottomNavigation';
import SendPackage from './Screens/SendPackage';
import store from './store';
import AddTransactionScreen from './Screens/AddTransactionScreen/AddTransactionScreen';
import ShowItemLocation from './Screens/TrackingScreen/ShowItemLocationScreen';
// import 'app.css';
const Stack = createStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={SplashScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="SendPackage" component={SendPackage} />
          <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
          <Stack.Screen name="ShowItemLocation" component={ShowItemLocation} />
          <Stack.Screen
            name="AddTransaction"
            component={AddTransactionScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
