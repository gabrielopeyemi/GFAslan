/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {ScrollView} from 'react-native';
import ChooseLocationButton from '../../Components/ChooseLocationButton';
import TextInput from '../../Components/TextInput/TextInput';

import {Container} from './GetSingleTransaction.styles';
import Toast from 'react-native-simple-toast';

interface SendPackageProps {
  children: ReactNode;
}

function SendPackage({children}: SendPackageProps) {
  const [packageID, setPackageID] = React.useState('');

  const onDone = () => {
    if (!packageID) {
      Toast.show('input the package ID');
      return;
    }
  };
  return (
    <Container
      style={{
        flex: 1,
      }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{flex: 1, padding: 24}}>
        <TextInput
          placeholder={'Enter package ID'}
          onChangeText={setPackageID}
          value={packageID}
        />
        <ChooseLocationButton
          text="Where?"
          btnStyle={{
            marginTop: 24,
          }}
          onPress={onDone}
        />
      </ScrollView>
    </Container>
  );
}

export default SendPackage;
