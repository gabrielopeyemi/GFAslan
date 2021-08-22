import { showMessage } from 'react-native-flash-message';
import { PermissionsAndroid, Platform } from 'react-native';
import Geolocation from 'react-native-geolocation-service';

export const getCurrentLocation = () =>
  new Promise((resolve, reject) => {
    Geolocation.watchPosition(
      position => {
        const cords = {
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        };
        resolve(cords);
      },
      error => {
        reject(error.message);
      },
      {
        enableHighAccuracy: true,
        timeout: 15000,
        forceRequestLocation: true,
        showLocationDialog: true,
        distanceFilter: 10,
      },
    );
  });

export const locationPermission = () =>
  new Promise(async (resolve, reject) => {
    if (Platform.OS === 'ios') {
      try {
        const permissionStatus = await Geolocation.requestAuthorization(
          'whenInUse',
        );
        if (permissionStatus === 'granted') {
          return resolve('granted');
        }
        reject('Permission not granted');
      } catch (error) {
        return reject(error);
      }
    }
    return PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    )
      .then(granted => {
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          resolve('granted');
        }
        return reject('Location Permission denied');
      })
      .catch(error => {
        console.log('Ask Location permission error: ', error);
        return reject(error);
      });
  });

const showError = (message: any) => {
  showMessage({
    message,
    type: 'danger',
    icon: 'danger',
  });
};

const showSuccess = (message: any) => {
  showMessage({
    message,
    type: 'success',
    icon: 'success',
  });
};

export { showError, showSuccess };
