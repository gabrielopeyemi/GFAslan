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
  const [dropLocationCords, setDropLocationCords] = React.useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  const [curLoc, setCurLoc] = React.useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: LATITUDE_DELTA,
    longitudeDelta: LONGITUDE_DELTA,
  });
  React.useEffect(() => {
    console.log({ Bali: props.route.params.locations });
    const { driver, destination } = props.route.params.locations;
    console.log({ driver: driver.longitude, destination });
    setDropLocationCords(destination);
    setCurLoc(driver);
  }, []);

  const animate = (latitude: any, longitude: any) => {
    const newCoordinate = { latitude, longitude };
    if (Platform.OS == 'android') {
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
