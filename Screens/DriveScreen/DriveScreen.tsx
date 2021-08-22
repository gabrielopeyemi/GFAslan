/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import {
  ConnectedText,
  Container,
  HeaderView,
  MainView,
  ProfileView,
  ProfileViewBack,
  StartButton,
  TextStyle,
  TextStyleSmall,
} from './DriveScreen.styles';
import store from '../../store';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { primaryColor } from '../../config';
import UpdateDriverLocation from './DriveFunction';
import {
  getCurrentLocation,
  locationPermission,
} from '../../helper/helperfunction';
import { server } from '../../server';
import { PropsArgs } from '../../Components/Types/PropsArgs';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import Geolocation from '@react-native-community/geolocation';
import { ConnectedView } from './DriveScreen.styles';

interface currentLocationArgs {
  latitude: number;
  longitude: number;
}
function DriveScreen(props: PropsArgs) {
  // Dispatch
  const dispatch = useDispatch();
  // State
  const [connection, setConnection] = React.useState<boolean>(false);
  const [buttonState, setButtonState] = React.useState(false);
  const [currentLocation, setCurrentLocation] = React.useState<any>(null);
  const IconNotMoved = require('./../../Assets/lottie/finding-route.json');
  const IconMoved = require('./../../Assets/lottie/finding-route-moved.json');

  // when app loads
  React.useEffect(() => {
    // setConnection(false);
    setInterval(() => {
      setConnection(false);
    }, 10000);
    const Location = async () => {
      try {
        const res = await locationPermission();
        if (res === 'granted') {
          console.log({ res });
          await Geolocation.watchPosition(
            position => {
              console.log({
                LAT: position.coords.latitude,
                LNG: position.coords.longitude,
              });
              setCurrentLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
              });
              dispatch({
                type: 'LOCATION',
                payload: position.coords,
              });
            },
            error => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
          );
        } else {
          console.log('You are not granted permission');
        }
      } catch (error) {
        console.log({ error });
      }
    };
    Location();
  }, []);
  React.useEffect(() => {
    UpdateDriver();
  }, [currentLocation]);

  // when your press button
  const handleOnPress = () => {
    setButtonState(!buttonState);
    console.log({ currentLocation });
    UpdateDriver();
  };

  // Send driver's location to server
  const UpdateDriver = async () => {
    try {
      const response = await server.post({
        url: '/users/update-driver-location',
        data: {
          latitude: currentLocation.latitude,
          longitude: currentLocation.longitude,
          address: 'address',
        },
        token: store.getState().UserDetailReducer.UserDetail.token,
      });
      console.log({ response: response.data.data.success });
      if (response.data.data.success) {
        setConnection(true);
        return;
      }
      setConnection(response.data.data.success);
      return;
    } catch (errorData) {
      console.log({ errorWhileSendLocationToServer: errorData.response.data });
    }
  };

  const { username } =
    store.getState().UserDetailReducer.UserDetail.userDetails;

  const handleTrack = () => {
    console.log('hello world');
    props.navigation.navigate('ProfileScreen');
  };
  if (currentLocation === null) {
    return <LoadingIndicator />;
  }
  return (
    <Container>
      <HeaderView>
        <ProfileViewBack>
          <ProfileView>
            <Text
              style={{ color: primaryColor, fontSize: 30, fontWeight: '700' }}>
              {username.charAt(0)}
            </Text>
          </ProfileView>
        </ProfileViewBack>
        <View
          style={{
            flex: 1,
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View>
            <TextStyle>Hi, {username}</TextStyle>
            <TextStyleSmall>Glad to see you again</TextStyleSmall>
          </View>
          {buttonState ? (
            <TouchableOpacity onPress={handleTrack}>
              <Icon
                name="ios-settings-outline"
                color="#fff"
                size={20}
                style={{
                  margin: 10,
                }}
              />
            </TouchableOpacity>
          ) : (
            <View />
          )}
        </View>
      </HeaderView>
      <MainView style={{ margin: 10 }}>
        <LottieView
          source={buttonState ? IconMoved : IconNotMoved}
          autoPlay
          loop
          style={{
            height: 200,
            marginTop: 80,
          }}
        />
        <ConnectedView>
          <ConnectedText connection={connection}>
            {connection ? 'connected' : 'not connected'}
          </ConnectedText>
        </ConnectedView>
        <StartButton
          state={buttonState}
          onPress={handleOnPress}
          style={{
            justifyContent: 'center',
            alignContent: 'center',
            alignSelf: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: '#fff',
              fontWeight: '700',
            }}>
            {buttonState ? 'Stop' : 'Start'} Journey
          </Text>
        </StartButton>
      </MainView>
    </Container>
  );
}

export default DriveScreen;
