/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  PermissionsAndroid,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { MainControl } from '../../Assets/Styles/Main.Styled';
import { GOOGLE_MAPS_APIKEY } from '../../config';
import Geolocation from '@react-native-community/geolocation';
import {
  getCurrentLocation,
  locationPermission,
} from '../../helper/helperfunction';
import imagePath from './imagePath';
import { BottomText, BottomView } from './Tracking.style';
import LocationReducer from '../../Reducer/UserLocation';
import store from '../../store';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;



interface PropsArgs {
  navigation: any;
}
export default function TrackingScreen({ navigation }: PropsArgs) {
  // State
  const [currentLocation, setCurrentLocation] = React.useState({
    latitude: 7.293116,
    longitude: 5.149776,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [destinationLocation, setDestinationLocation] = React.useState({
    latitude: 7.292875,
    longitude: 5.150723,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });

  React.useEffect(() => {
    const Location = async () => {
      try {
        const response: any = await getCurrentLocation();
        console.log({ CurrentLocation: response });
        setCurrentLocation({
          latitude: response.latitude,
          longitude: response.longitude,
          latitudeDelta: LATITUDE_DELTA,
          longitudeDelta: LONGITUDE_DELTA,
        });
      } catch (error) {
        console.log({ error });
      }
    };
    Location();
  }, []);

  const markerRef: any = React.useRef<any>();
  const mapRef: any = React.useRef<any>(null);

  return (
    <MainControl>
      <MapView
        ref={mapRef}
        customMapStyle={MapStyle}
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
            console.log(`Distance: ${result.distance} km`);
            console.log(`Duration: ${result.duration} min.`);

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
        <Marker coordinate={destinationLocation} />
        <Marker coordinate={currentLocation} image={imagePath.car} />
      </MapView>
      <BottomView style={{ flex: 1 }}>
        <Text>Where is my package?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('SendPackage')}
          style={{ width: '100%', marginTop: 10 }}>
          <BottomText>Choose location</BottomText>
        </TouchableOpacity>
      </BottomView>
    </MainControl>
  );
}

const MapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#242f3e',
      },
    ],
  },
  {
    featureType: 'administrative.locality',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#263c3f',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#6b9a76',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#38414e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#212a37',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9ca5b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#746855',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#1f2835',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#f3d19c',
      },
    ],
  },
  {
    featureType: 'transit',
    elementType: 'geometry',
    stylers: [
      {
        color: '#2f3948',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#d59563',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#515c6d',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#17263c',
      },
    ],
  },
];
