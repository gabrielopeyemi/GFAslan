/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import {
  Container,
  HeaderView,
  MainView,
  ProfileView,
  ProfileViewBack,
  StartButton,
  TextStyle,
  TextStyleSmall,
  TrackText,
} from './DriveScreen.styles';
import store from '../../store';
import { View } from 'react-native';
import { useDispatch } from 'react-redux';
import { primaryColor } from '../../config';
import UpdateDriverLocation from './DriveFunction';
import { getCurrentLocation } from '../../helper/helperfunction';
import { server } from '../../server';
import { PropsArgs } from '../../Components/Types/PropsArgs';

interface locationDataArgs {
  latitude: number;
  longitude: number;
}
function DriveScreen(props: PropsArgs) {
  const dispatch = useDispatch();
  const [buttonState, setButtonState] = React.useState(false);
  const [locationData, setLocationData] = React.useState<any>({});
  // Get driver's location from Android API

  React.useEffect(() => {
    const Location = async () => {
      try {
        const response: any = await getCurrentLocation();
        setLocationData(response);
        dispatch({
          type: 'LOCATION',
          payload: response,
        });
      } catch (error) {
        console.log({ error });
      }
    };
    Location();
    setInterval(() => {
      console.log('Hello');
      UpdateDriver();
    }, 5 * 1000);
  }, []);
  const handleOnPress = () => {
    setButtonState(!buttonState);
    console.log({ locationData });
    UpdateDriver();
    setInterval(() => {
      console.log('Hello');
      UpdateDriver();
    }, 60 * 1000);
  };
  // Send driver's location to server
  const UpdateDriver = async () => {
    try {
      const response = await server.post({
        url: '/users/update-driver-location',
        data: {
          latitude: locationData.latitude,
          longitude: locationData.longitude,
          address: 'address',
        },
        token: store.getState().UserDetailReducer.UserDetail.token,
      });
      console.log({ response });
      return response;
    } catch (error) {
      console.log({ error });
    }
  };
  const IconNotMoved = require('./../../Assets/lottie/finding-route.json');
  const IconMoved = require('./../../Assets/lottie/finding-route-moved.json');
  const { username } =
    store.getState().UserDetailReducer.UserDetail.userDetails;
  const handleTrack = () => {
    console.log('hello world');
    props.navigation.navigate('ProfileScreen');
  };
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
