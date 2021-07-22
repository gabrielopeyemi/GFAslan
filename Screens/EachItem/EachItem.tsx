/* eslint-disable react-native/no-inline-styles */
import Emoji from 'react-native-emoji';
import React from 'react';

import {
  Body,
  BodyStatus,
  BodyTitle,
  BodyValue,
  BodyView,
  ButtonCheck,
  Container,
  Header,
  Hr,
  Main,
  TitleText,
  TitleView,
  TitleViewStatus,
} from './EachItem.styles';
import {Dimensions, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {PropsArgs} from '../../Components/Types/PropsArgs';
import {GetSingleItem} from './EachItemFunction';
import {DetailArgs} from '../../Components/Types/ItemArgs';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
interface EachItemProps {}

function EachItem(props: PropsArgs) {
  const [details, setDetails] = React.useState<DetailArgs | any>({});
  const [locations, setLocations] = React.useState<any>({});
  const [color, setColor] = React.useState('');
  React.useEffect(() => {
    console.log({props: props.route.params.data});
    getItem(props.route.params.data);
    setLocations({
      driver: {
        latitude: 7.293186279820373,
        longitude: 5.149915105760385,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
      destination: {
        latitude: 7.291403,
        longitude: 5.142603,
        latitudeDelta: LATITUDE_DELTA,
        longitudeDelta: LONGITUDE_DELTA,
      },
    });
  }, []);
  React.useEffect(() => {
    console.log({ details });
    if (details.receiverDetails) {
      console.log({ Hyt: details.receiverDetails.address });
      setLocations({
        driver: {
          latitude: 7.293186279820373,
          longitude: 5.149915105760385,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        destination: {
          latitude: parseInt(details.receiverDetails.address.lat, 10),
          longitude: parseInt(details.receiverDetails.address.lng, 10),
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      });
    } else {
      setLocations({
        driver: {
          latitude: 7.293186279820373,
          longitude: 5.149915105760385,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
        destination: {
          latitude: 7.291403,
          longitude: 5.142603,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        },
      });
    }
  }, [details]);
  const getItem = async (propz: any) => {
    try {
      const response = await GetSingleItem(propz);
      console.log({response});
      if (response) {
        setDetails(response);
        switch (response.data.status) {
          case 'not-in-transit':
            setColor('red');
            return;
          default:
            setColor('blue');
        }
      }
    } catch (error) {
      console.log({error});
    }
  };
  console.log({locations});
  // console.log({details});
  const {status, name, description, destination, receiverDetails} = details;
  return (
    <Container>
      <Header>
        <TouchableOpacity onPress={() => console.log('back')}>
          <Icon
            name="ios-chevron-back-circle-sharp"
            size={15}
            onPress={() => props.navigation.goBack()}>
            {' '}
            Back
          </Icon>
        </TouchableOpacity>
        {/* <TouchableOpacity onPress={() => console.log('back')}>
            <Icon
              name="ios-chevron-back-circle-sharp"
              onPress={() => props.navigation.navigate('AddTransaction')}>
              {' '} Back
            </Icon>
          </TouchableOpacity> */}
      </Header>
      <Main>
        <TitleView>
          <Emoji name="grinning" style={{fontSize: 100}} />
        </TitleView>
        <View style={{margin: 10}}>
          <View>
            <BodyValue>Item name</BodyValue>
            <TitleText>{name}</TitleText>
          </View>
          <Hr />
          <View>
            <BodyValue>Item Description</BodyValue>
            <TitleText>{description}</TitleText>
          </View>
          <Hr />
          <View>
            <BodyValue>Receiver name</BodyValue>
            <TitleText>{receiverDetails ? receiverDetails.name : ''}</TitleText>
          </View>
          <Hr />
          <View>
            <BodyValue>Receiver Address</BodyValue>
            <TitleText>{destination}</TitleText>
          </View>
          <Hr />
          <View>
            <BodyValue>Status</BodyValue>
            <TitleViewStatus color={color}>{status}</TitleViewStatus>
          </View>
          <Hr />
        </View>
      </Main>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('ShowItemLocation', {locations})
        }>
        <ButtonCheck>Track</ButtonCheck>
      </TouchableOpacity>
    </Container>
  );
}

export default EachItem;

// onPress={() => navigation.navigate('ShowItemLocation', {Locations})}
