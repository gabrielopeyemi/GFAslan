/* eslint-disable react-native/no-inline-styles */
import Emoji from 'react-native-emoji';
import React from 'react';
import { Button, Modal, Select } from 'native-base';
import {
  Body,
  BodyStatus,
  BodyTitle,
  BodyValue,
  BodyView,
  TitleViewStatus,
  ButtonCheck,
  Container,
  Header,
  Hr,
  Main,
  TitleStatus,
  TitleStatusViewLeft,
  TitleStatusViewRight,
  TitleText,
  TitleView,
} from './EachItem.styles';
import Geolocation from '@react-native-community/geolocation';
import { Dimensions, Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { PropsArgs } from '../../Components/Types/PropsArgs';
import { GetSingleItem } from './EachItemFunction';
import { DetailArgs } from '../../Components/Types/ItemArgs';
import store from '../../store';
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;
interface EachItemProps {}

function EachItem(props: PropsArgs) {
  const [details, setDetails] = React.useState<DetailArgs | any>({});
  const [locations, setLocations] = React.useState<any>({});
  const [newStatus, setNewStatus] = React.useState('');
  const [color, setColor] = React.useState('');
  React.useEffect(() => {
    console.log({ props: props.route.params.data });
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
      console.log({ error });
    }
  };
  let permission =
    store.getState().UserDetailReducer.UserDetail.userDetails.permission;
  console.log({ locations });
  // console.log({details})
  const { status, name, description, destination, receiverDetails } = details;
  console.log({ details });
  const handleUpdate = () => {
    if (permission === 'admin') {
      console.log('lol');
    }
  };
  const [placement, setPlacement] = React.useState(undefined);
  const [open, setOpen] = React.useState(false);

  const openModal = (placement: any) => {
    setOpen(true);
    setPlacement(placement);
  };
  const handleStatusUpdate = () => {
    console.log('handleStatusUpdate');
  };
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
      </Header>
      <Main>
        <TitleView>
          <Emoji name="grinning" style={{ fontSize: 100 }} />
        </TitleView>
        <View style={{ margin: 10 }}>
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
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <TitleStatusViewLeft>
                <TitleStatus color={color}>{status}</TitleStatus>
              </TitleStatusViewLeft>
              <TitleStatusViewRight>
                <TouchableOpacity
                  onPress={() => {
                    setOpen(!open);
                  }}>
                  <TitleStatus>
                    {permission === 'admin' ? 'update' : ''}
                  </TitleStatus>
                </TouchableOpacity>
              </TitleStatusViewRight>
            </View>
          </View>
          <Hr />
        </View>
      </Main>
      <TouchableOpacity
        onPress={() =>
          props.navigation.navigate('ShowItemLocation', { locations })
        }>
        <ButtonCheck>Track</ButtonCheck>
      </TouchableOpacity>
      <Modal isOpen={open} onClose={() => setOpen(false)} mt={12}>
        <Modal.Content
          width={`${screen.width * 0.98}px`}
          style={{
            marginBottom: 0,
            marginTop: 'auto',
          }}>
          <Modal.CloseButton />
          <Modal.Header>Update Status</Modal.Header>
          <Modal.Body>
            <Select
              placeholder={status} 
              selectedValue={newStatus}
              width={`${screen.width * 0.85}px`}
              onValueChange={(itemValue: string) => setNewStatus(itemValue)}>
              <Select.Item label="Wallet" value="key0" />
              <Select.Item label="ATM Card" value="key1" />
              <Select.Item label="Debit Card" value="key2" />
              <Select.Item label="Credit Card" value="key3" />
              <Select.Item label="Net Banking" value="key4" />
            </Select>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>LEARN MORE</Button>
              <Button
                onPress={() => {
                  setOpen(false);
                }}>
                ACCEPT
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Container>
  );
}

const styles = {
  top: {
    marginBottom: 'auto',
    marginTop: 0,
  },
  bottom: {
    marginBottom: 0,
    marginTop: 'auto',
  },
  left: {
    marginLeft: 0,
    marginRight: 'auto',
  },
  right: {
    marginLeft: 'auto',
    marginRight: 0,
  },
  center: {},
};
export default EachItem;

// onPress={() => navigation.navigate('ShowItemLocation', {Locations})}
