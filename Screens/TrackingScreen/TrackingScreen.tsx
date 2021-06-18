import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import MapView from 'react-native-maps'
import MapViewDirections from 'react-native-maps-directions';
import { MainControl } from '../../Assets/Styles/Main.Styled'
import { GOOGLE_MAPS_APIKEY } from '../../config';

export default function TrackingScreen() {
  const [state, setState] = React.useState({
    pickupCords: {
      latitude: 7.293186279820373,
      longitude: 5.149915105760385,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    },
    dropLocationCords: {
      latitude: 7.291494193094512,
      longitude: 5.142544395165924,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }
  });

  const { pickupCords, dropLocationCords } = state;
  return (
    <MainControl>
       <MapView
        style={StyleSheet.absoluteFill}
        initialRegion={pickupCords}
      >
        <MapViewDirections
          origin={pickupCords}
          destination={dropLocationCords}
          apikey={GOOGLE_MAPS_APIKEY}
        />
      </MapView>
    </MainControl>
  )
}; 