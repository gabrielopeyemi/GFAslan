import {server} from '../../server';
import store from '../../store';

export const GetAllTransaction = async () => {
  try {
    const response = await server.get({
      url: `/items`,
      token: store.getState().UserDetailReducer.UserDetail.token,
    });
    return response.data.data;
  } catch (error) {
    throw error;
  }
};
