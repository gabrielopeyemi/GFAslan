import { server } from '../../server';
import store from '../../store';

export const GetAllTransaction = async () => {
  const Id = store.getState().UserDetailReducer.UserDetail.userDetails._id;
  console.log(Id);
  try {
    const response = await server.get({
      url: '/items/',
      token: store.getState().UserDetailReducer.UserDetail.token,
    });
    return response.data.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
