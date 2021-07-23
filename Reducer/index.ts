import UserDetailReducer from './UserDetailsReducer';
import {combineReducers} from 'redux';
import LocationReducer from './UserLocation';

export const initialState: any = {
  UserDetail: {},
  Location: {},
};
const AllReducers = combineReducers({
  UserDetailReducer: UserDetailReducer,
  LocationReducer: LocationReducer,
});

export default AllReducers;
