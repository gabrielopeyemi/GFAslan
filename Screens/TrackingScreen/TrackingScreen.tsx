/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import MapView, {AnimatedRegion, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import {MainControl} from '../../Assets/Styles/Main.Styled';
import {GOOGLE_MAPS_APIKEY} from '../../config';
import {
  getCurrentLocation,
  locationPermission,
} from '../../helper/helperfunction';
import imagePath from './imagePath';
import {BottomText, BottomView} from './Tracking.style';
import LocationReducer from '../../Reducer/UserLocation';
import store from '../../store';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface PropsArgs {
  navigation: any;
}
export default function TrackingScreen({navigation}: PropsArgs) {
  const markerRef: any = React.useRef<any>();
  const mapRef: any = React.useRef<any>(null);
  const Location = store.getState().LocationReducer.PresentLocation;
  const [state, setState] = React.useState({
    curLoc: {
      latitude: 7.293186279820373,
      longitude: 5.149915105760385,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCords: {
      latitude: Location.latitude,
      longitude: Location.longitude,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
  });

  const {curLoc, dropLocationCords} = state;

  const getLiveLocation = async () => {
    const locPermissionDenied = await locationPermission();
    if (locPermissionDenied) {
      const {latitude, longitude} = await getCurrentLocation();
      // console.log("get live location after 4 second")
      animate(latitude, longitude);
      setState({
        ...state,
        curLoc: {latitude, longitude},
        coordinate: new AnimatedRegion({
          latitude: latitude,
          longitude: longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        }),
      });
    }
  };

  const animate = (latitude: any, longitude: any) => {
    const newCoordinate = {latitude, longitude};
    if (Platform.OS === 'android') {
      if (markerRef.current) {
        markerRef.current.animateMarkerToCoordinate(newCoordinate, 7000);
      }
    } else {
      coordinate.timing(newCoordinate).start();
    }
  };

  return (
    <MainControl>
      <MapView
        ref={mapRef}
        style={{
          width: screen.width,
          height: screen.height,
        }}
        initialRegion={curLoc}>
        <Marker coordinate={dropLocationCords} />
        <Marker coordinate={curLoc} image={imagePath.car} />
        <MapViewDirections
          origin={curLoc}
          destination={dropLocationCords}
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
      <BottomView style={{flex: 1}}>
        <Text>Where is my package?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SendPackage')}
          style={{width: '100%', marginTop: 10}}>
          <BottomText>Choose location</BottomText>
        </TouchableOpacity>
      </BottomView>
    </MainControl>
  );
}
