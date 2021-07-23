import {initialState} from '.';
import {ActionTypes} from '../Components/Types/ActionTypes';

const LocationReducer = (
  state = initialState.Location,
  action: ActionTypes,
) => {
  switch (action.type) {
    case 'LOCATION':
      return {
        PresentLocation: action.payload,
      };
    default:
      return state;
  }
};

export default LocationReducer;
