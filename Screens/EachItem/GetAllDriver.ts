import { server } from '../../server';
import store from '../../store';

export const GetAllDriver = async () => {
  try {
    const response = await server.get({
      url: `/users`,
      token: store.getState().UserDetailReducer.UserDetail.token,
    });
    console.log({ response });
    return response.data.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
