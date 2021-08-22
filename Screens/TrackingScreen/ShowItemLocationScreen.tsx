/* eslint-disable no-undef */
import React from 'react';
import {
  Text,
  StyleSheet,
  Platform,
  TouchableOpacity,
  Dimensions,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker, AnimatedRegion } from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import { MainControl } from '../../Assets/Styles/Main.Styled';
import { GOOGLE_MAPS_APIKEY } from '../../config';
import imagePath from './imagePath';
import { TopView, CasView } from './Tracking.style';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface PropsArgs {
  navigation: any;
  route: any;
}
export default function ShowItemLocation(props: PropsArgs) {
  const markerRef: any = React.useRef<any>();
  const mapRef: any = React.useRef<any>(null);
  const [dropLocationCords, setDropLocationCords] = React.useState<any>(null);
  const [curLoc, setCurLoc] = React.useState<any>(null);
  React.useEffect(() => {
    console.log({ Bali: props.route.params.locations });
    const { driver, destination } = props.route.params.locations;
    console.log({ driver: driver.longitude, destination });
    setDropLocationCords(destination);
    setCurLoc(driver);
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
  if (dropLocationCords === null) {
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
        initialRegion={curLoc}>
        <Marker coordinate={dropLocationCords} title={'Destination'}>
          <View style={styles.circle}>
            <View style={styles.core} />
            <View style={styles.stroke} />
          </View>
        </Marker>
        <Marker coordinate={curLoc} title={'Packages Location'}>
          <View style={styles.circle}>
            <View style={styles.core} />
            <View style={styles.stroke} />
          </View>
        </Marker>
        <MapViewDirections
          origin={curLoc}
          destination={dropLocationCords}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={6}
          optimizeWaypoints={true}
          onReady={result => {
            console.log(`Distance: ${result.distance} km`)
            console.log(`Duration: ${result.duration} min.`)
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
      {/* <TopView>
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
        </CasView>
      </TopView> */}
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
