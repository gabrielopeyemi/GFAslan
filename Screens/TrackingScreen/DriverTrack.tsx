/* eslint-disable no-undef */
import React from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { AnimatedRegion, Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { MainControl } from '../../Assets/Styles/Main.Styled';
import { GOOGLE_MAPS_APIKEY } from '../../config';
import {
  getCurrentLocation,
  locationPermission,
} from '../../helper/helperfunction';
import imagePath from './imagePath';
import { BottomText, TopView, CasView } from './Tracking.style';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
import Geolocation from '@react-native-community/geolocation';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface PropsArgs {
  navigation: any;
  route: any;
}
export default function DriverTrack(props: PropsArgs) {
  const markerRef: any = React.useRef<any>();
  const mapRef: any = React.useRef<any>(null);
  const [currentLocation, setCurrentLocation] = React.useState<any>(null);
  const [destinationLocation, setDestinationLocation] = React.useState({
    latitude: 7.292875,
    longitude: 5.150723,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  React.useEffect(() => {
    const Location = async () => {
      try {
        const res = await locationPermission();
        if (res === 'granted') {
          console.log({ res });
          await Geolocation.watchPosition(
            position => {
              console.log({
                LAT: position.coords.latitude,
                LNG: position.coords.longitude,
              });
              setCurrentLocation({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                latitudeDelta: LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
              });
            },
            error => {
              // See error code charts below.
              console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 },
          );
        } else {
          console.log('You are not granted permission');
        }
      } catch (error) {
        console.log({ error });
      }
    };
    Location();
  }, []);

  const animate = (latitude: any, longitude: any) => {
    const newCoordinate = { latitude, longitude };
    if (Platform.OS === 'android') {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };
  if (currentLocation === null) {
    return <LoadingIndicator />;
  }
  return (
    <MainControl>
      <MapView
        ref={mapRef}
        style={{
          width: screen.width,
          height: screen.height,
        }}
        initialRegion={currentLocation}>
        <Marker coordinate={destinationLocation} />
        <Marker coordinate={currentLocation} />
        <MapViewDirections
          origin={currentLocation}
          destination={destinationLocation}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={6}
          optimizeWaypoints={true}
          // onStart={(params) => {
          //     console.log(`Started routing between "${params.origin}" and "${params.destination}"`);
          // }}
          onReady={result => {
            // console.log(`Distance: ${result.distance} km`)
            // console.log(`Duration: ${result.duration} min.`)

            mapRef.current.fitToCoordinates(result.coordinates, {
              edgePadding: {
                right: 30,
                bottom: 300,
                left: 30,
                top: 100,
              },
            });
          }}
        />
      </MapView>
      <TopView>
        <CasView>
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
        </CasView>
      </TopView>
    </MainControl>
  );
}
