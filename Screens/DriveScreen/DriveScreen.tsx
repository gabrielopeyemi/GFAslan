/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import { Text } from 'react-native';

import {
  Container,
  HeaderView,
  MainView,
  ProfileView,
  StartButton,
  TextStyle,
  TextStyleSmall,
} from './DriveScreen.styles';
import store from '../../store';
import { View } from 'react-native';

function DriveScreen() {
  const [buttonState, setButtonState] = React.useState(false);
  const handleOnPress = () => {
    setButtonState(!buttonState);
  };
  const { username } =
    store.getState().UserDetailReducer.UserDetail.userDetails;
  return (
    <Container
      style={{
        flex: 1,
        // justifyContent: 'center',
        // alignContent: 'center',
        // alignSelf: 'center',
        // alignItems: 'center',
        margin: 0,
      }}>
      <HeaderView>
        <ProfileView />
        <View>
          <TextStyle>Hi, {username}</TextStyle>
          <TextStyleSmall>Glad to see you again</TextStyleSmall>
        </View>
      </HeaderView>
      <MainView style={{ margin: 10 }}>
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
            {buttonState ? 'Stop' : 'Start'}
          </Text>
        </StartButton>
      </MainView>
    </Container>
  );
}

export default DriveScreen;
