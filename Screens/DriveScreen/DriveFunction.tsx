import store from '../../store';
interface Props {
  latitude: string;
  longitude: string;
  address?: string;
}

let TheLocation = store.getState().LocationReducer;

let { latitude, longitude } = TheLocation;
const UpdateDriverLocation = async () => {
  console.log({ props: 'props', latitude, longitude });
  console.log({ TheLocation });

};

export default UpdateDriverLocation;
