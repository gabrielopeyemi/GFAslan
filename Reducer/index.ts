import UserDetailReducer from './UserDetailsReducer';
import {combineReducers} from 'redux';

export const initialState: any = {
  UserDetail: '',
};
const AllReducers = combineReducers({
  UserDetailReducer: UserDetailReducer,
});

export default AllReducers;
