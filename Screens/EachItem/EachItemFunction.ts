import {server} from '../../server';
import store from '../../store';

export const GetSingleItem = async (ID: any) => {
  console.log({ID});
  try {
    const response = await server.get({
      url: `/items/id/${ID}`,
      token: store.getState().UserDetailReducer.UserDetail.token,
    });
    console.log({response});
    return response.data.data;
  } catch (error) {
    console.log({error});
    throw error;
  }
};
