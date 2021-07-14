
import NetInfo from '@react-native-community/netinfo';

const GetInternetConnection = () => {
  NetInfo.fetch().then(state => {
    console.log('Connection type', state.type);
    console.log('Is connected?', state.isConnected);
    return state;
  });
};

export default GetInternetConnection;
