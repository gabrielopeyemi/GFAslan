/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import Toast from 'react-native-simple-toast';
import TextInputu from './../../Components/TextInput/TextInput';
import ChooseLocationInput from '../../Components/ChooseLocationInput/ChooseLocationInput';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  HeaderLeft,
  HeaderRight,
} from './AddTransactionScreen.styles';
import Button from '../../Components/Button/Button';
import { primaryColor } from '../../config';
import { PropsArgs } from '../../Components/Types/PropsArgs';
import AddTransactionFunction from './AddTransactionFunction';
interface AddressArgs {
  lat: number;
  lng: number;
  address: string;
}
function AddTransactionScreen(props: PropsArgs) {
  const [packageName, setPackageName] = useState<string>('');
  const [packageDescription, setPackageDescription] = useState<string>('');
  const [receiverPhoneNumber, setReceiverPhoneNumber] = useState<string>('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverLocation, setReceiverLocation] = useState<AddressArgs>({
    lat: 0,
    lng: 0,
    address: '',
  });
  const receiverFetchLatLog = ({ lat, lng, address }: AddressArgs) => {
    console.log({ latitude: lat, longitude: lng });
    return setReceiverLocation({ lat, lng, address });
  };
  const handleDone = async () => {
    try {
      const response = await AddTransactionFunction({
        packageName,
        packageDescription,
        receiverLocation,
        receiverName,
        receiverPhoneNumber,
      });
      console.log({ responseLog: response.data.data._id });
      if (response.status === 201) {
        props.navigation.navigate('EachItem', { data: response.data.data._id });
      }
    } catch (error) {
      const theError = error.response.data.message[0];
      console.log({ error: theError });
      if (theError === 'destination should not be empty') {
        Toast.show('Please input receivers address');
        return;
      }
    }
  };
  return (
    <Container>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{
          flex: 1,
          padding: 24,
        }}>
        <Header>
          <HeaderLeft
            style={{ fontFamily: "'Poppins', sans-serif", fontWeight: '700' }}>
            Create new transaction
          </HeaderLeft>
          <HeaderRight>
            <Icon
              name="keyboard-arrow-down"
              color={primaryColor}
              size={30}
              onPress={() => props.navigation.goBack()}
            />
          </HeaderRight>
        </Header>
        <TextInputu
          placeholder="Package Name"
          onChangeText={setPackageName}
          value={packageName}
        />
        <TextInputu
          placeholder="Package description"
          onChangeText={setPackageDescription}
          value={packageDescription}
        />
        <TextInputu
          placeholder="Receiver Name"
          onChangeText={setReceiverName}
          value={receiverName}
        />
        <TextInputu
          placeholder="Receiver Phone"
          onChangeText={setReceiverPhoneNumber}
          value={receiverPhoneNumber}
          keyboardType="numeric"
        />
        <ChooseLocationInput
          setLocation={setReceiverLocation}
          FetchLatLog={receiverFetchLatLog}
          placeholder="Where are you sending to?"
        />
        <Button handleButton={handleDone} title={'Create'} />
      </ScrollView>
    </Container>
  );
}

export default AddTransactionScreen;
