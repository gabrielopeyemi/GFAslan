/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import TextInputu from './../../Components/TextInput/TextInput';
import ChooseLocationInput from '../../Components/ChooseLocationInput/ChooseLocationInput';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {Container, Header, HeaderLeft, HeaderRight} from './AddTransactionScreen.styles';
import Button from '../../Components/Button/Button';
import { primaryColor } from '../../config';

function AddTransactionScreen(props: any) {
  const [packageName, setPackageName] = useState('');
  // const [packageNameDesc, setPackageDesc = useState<any>('')
  const [packageNameDesc, setPackageNameDesc] = useState('');
  const [receiverName, setReceiverName] = useState('');
  const [receiverLocation, setReceiverLocation] = useState({lat: 0, lng: 0});
  const receiverFetchLatLog = (lat: number, lng: number) => {
    console.log({latitude: lat, longitude: lng});
    return setReceiverLocation({lat, lng});
  };
  const handleDone = () => {
    console.log(receiverLocation);
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
            style={{fontFamily: "'Poppins', sans-serif", fontWeight: '900'}}>
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
          placeholder="Package desc"
          onChangeText={setPackageNameDesc}
          value={packageNameDesc}
        />
        <TextInputu
          placeholder="Receiver Name"
          onChangeText={setReceiverName}
          value={receiverName}
        />
        <ChooseLocationInput
          setLocation={setReceiverLocation}
          FetchLatLog={receiverFetchLatLog}
        />
        <Button handleButton={handleDone} title={'Create'} />
      </ScrollView>
    </Container>
  );
}

export default AddTransactionScreen;
