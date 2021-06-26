/* eslint-disable react-native/no-inline-styles */
import React, {ReactNode} from 'react';
import {ScrollView } from 'react-native';
import ChooseLocation from '../../Components/ChooseLocation';
import ChooseLocationButton from '../../Components/ChooseLocationButton';

import {Container} from './styles';

interface SendPackageProps {
  children: ReactNode;
}

function SendPackage({children}: SendPackageProps) {
  const [curLoc, setCurLoc] = React.useState({});

  const onDone = () => {
    console.log(curLoc);
  };

  const fetchPickupCords = (lat: number, log: number) => {
    console.log('Log ====>', log);
    setCurLoc(...curLoc);
  };
  return (
    <Container
      style={{
        flex: 1,
      }}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={{flex: 1, padding: 24}}>
        <ChooseLocation
          placeholder={'Enter pickup location'}
          fetchAddressCords={fetchPickupCords}
          setLocation={setCurLoc}
        />

        <ChooseLocation
          placeholder={'Enter destination location'}
          // fetchAddressCords={fetchDestinationCords}
        />

        <ChooseLocationButton
          text="Done"
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
