import React from 'react';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '../../config';
import { Container, Label } from './styles';


interface ChoosePickupProps {
  placeholder: string;
  fetchAddressCords?: any;
  setLocation?: any
}

const ChooseLocation = ({
  placeholder,
  fetchAddressCords,
  setLocation,
}: ChoosePickupProps) => {

  const onPressAddress = (data: any, details: any) => {
    // 'details' is provided when fetchDetails = true
    console.log({ details, data });
    const lat = details.geometry.location.lat;
    const lng = details.geometry.location.lng;
    setLocation({
      longitude: lng,
      latitude: lat
    });
    fetchAddressCords(lat, lng);
  }

  return (
    <Container style={{ flex: 1 }}>
      <Label>{ placeholder }</Label>
      <GooglePlacesAutocomplete
        placeholder={placeholder}
        onPress={onPressAddress}
        fetchDetails={true}
        query={{
          key: GOOGLE_MAPS_APIKEY,
          language: 'en',
        }}
        // currentLocation={true}
        // currentLocationLabel='Current location'
        styles={{
          textInputContainer: {
            borderColor: 'grey',
            borderWidth: 1,
            borderStyle: 'solid',
            borderRadius: 5,
            backgroundColor: '#f4f4f4'
          },
          textInput: {
            height: 38,
            color: '#5d5d5d',
            fontSize: 16,
          },
          predefinedPlacesDescription: {
            color: '#1faadb',
          },
        }}
      />
    </Container>
  );
};

export default ChooseLocation;
