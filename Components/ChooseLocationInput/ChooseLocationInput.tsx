import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {
  borderRadius,
  GOOGLE_MAPS_APIKEY,
  inputBGColor,
  primaryColor,
} from '../../config';

import {Container} from './ChooseLocationInput.styles';

interface PropsArgs {
  setLocation: any;
  FetchLatLog: any;
}
function ChooseLocationInput(props: PropsArgs) {
  const onPressAddress = (data: any, details: any) => {
    const lat = details.geometry.location.lat;
    const lng = details.geometry.location.lng;
    props.FetchLatLog(lat, lng);
  };
  return (
    <Container style={{flex: 1}}>
      <GooglePlacesAutocomplete
        placeholder="Search"
        onPress={onPressAddress}
        fetchDetails={true}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        styles={{
          textInput: {
            height: 60,
            color: '#fff',
            fontSize: 16,
            backgroundColor: inputBGColor,
            borderRadius: borderRadius,
            borderColor: primaryColor,
            borderWidth: 1,
            borderStyle: 'solid',
            marginTop: 10,
            marginBottom: 10,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
    </Container>
  );
}

export default ChooseLocationInput;
