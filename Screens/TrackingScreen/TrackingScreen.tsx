/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
  NativeModules,
  View,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import MapView, { Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { MainControl } from '../../Assets/Styles/Main.Styled';
import { GOOGLE_MAPS_APIKEY } from '../../config';
import {
  locationPermission,
  getCurrentLocation,
} from '../../helper/helperfunction';
import imagePath from './imagePath';
import { BottomText, BottomView, Dot, Pulse } from './Tracking.style';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface PropsArgs {
  navigation: any;
}
export default function TrackingScreen({ navigation }: PropsArgs) {
  // State
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
          (position) => {
              console.log({ LAT: position.coords.latitude, LNG: position.coords.longitude });
              setCurrentLocation({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    latitudeDelta: LATITUDE_DELTA,
                    longitudeDelta: LONGITUDE_DELTA,
                  });
            },
            (error) => {
            // See error code charts below.
            console.log(error.code, error.message);
            },
            { enableHighAccuracy: true, timeout: 15000, maximumAge:          10000 }
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
  const markerRef: any = React.useRef<any>();
  const mapRef: any = React.useRef<any>(null);
  if (currentLocation === null) {
    return <LoadingIndicator />
  }
  return (
    <MainControl>
      <MapView
        zoomEnabled={true}
        focusable
        provider={PROVIDER_GOOGLE}
        showsBuildings={true}
        onPress={()=> animate(currentLocation.latitude, currentLocation.longitude)}
        // showsUserLocation={true}
        ref={mapRef}
        style={{
          width: screen.width,
          height: screen.height,
          margin: 0,
          padding: 0,
        }}
        initialRegion={currentLocation}>
        <MapViewDirections
          origin={currentLocation}
          destination={destinationLocation}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={6}
          optimizeWaypoints={true}
          onStart={params => {
            console.log(
              `Started routing between "${params.origin}" and "${params.destination}"`,
            );
          }}
          onReady={result => {
            const speed = result.distance / (result.duration / 60);
            console.log(`Distance: ${result.distance} km`);
            console.log(`Duration: ${result.duration} min.`);
            console.log(`Speed: ${speed} km/hr.`);

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
        <Marker coordinate={destinationLocation} title={'Destination'} focusable>
          <View style={styles.circle}>
            <View style={styles.core} />
            <View style={styles.stroke} />
          </View>
        </Marker>
        <Marker coordinate={currentLocation} title={'Packages Location'} focusable>
          <View style={styles.circle}>
            <View style={styles.core} />
            <View style={styles.stroke} />
          </View>
        </Marker>
      </MapView>
      {/* <BottomView style={{ flex: 1 }}>
        <Text>Where is my package?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SendPackage')}
          style={{ width: '100%', marginTop: 10 }}>
          <BottomText>Choose location</BottomText>
        </TouchableOpacity>
      </BottomView> */}
    </MainControl>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 26,
    height: 26,
    borderRadius: 50,
  },
  stroke: {
    backgroundColor: '#ffffff',
    borderRadius: 50,
    width: '100%',
    height: '100%',
    zIndex: 1,
  },
  core: {
    backgroundColor: 'red',
    width: 24,
    position: 'absolute',
    top: 1,
    left: 1,
    right: 1,
    bottom: 1,
    height: 24,
    borderRadius: 50,
    zIndex: 2,
    margin: 0,
  },
});
