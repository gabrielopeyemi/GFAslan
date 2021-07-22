import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {primaryColor} from '../../config';
import ProfileScreen from '../../Screens/ProfileScreen/ProfileScreen';
import TrackingScreen from '../../Screens/TrackingScreen/TrackingScreen';
import TransactionScreen from '../../Screens/TransactionScreen/TransactionScreen';

const Tab = createBottomTabNavigator();

const BottomNavigationDriver = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: primaryColor,
      }}>
      <Tab.Screen
        name="Feed"
        component={TransactionScreen}
        options={{
          tabBarLabel: 'Transaction',
          tabBarIcon: ({color, size}) => (
            <Icon name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={TrackingScreen}
        options={{
          tabBarLabel: 'Tracking',
          tabBarIcon: ({color, size}) => (
            <Icon name="map" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <Icon name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigationDriver;
