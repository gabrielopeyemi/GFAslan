import {initialState} from '.';
import { ActionTypes } from '../Components/Types/ActionTypes';

const UserDetailReducer = (
  state = initialState.UserDetail,
  action: ActionTypes,
) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        UserDetail: action.payload,
      };
    default:
      return state;
  }
};

export default UserDetailReducer;
