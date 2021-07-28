/* eslint-disable quotes */
import { server } from '../../server';
import store from '../../store';
interface PropsArgs {
  permission?: string;
}
export const GetAllTransaction = async () => {
  const Id = store.getState().UserDetailReducer.UserDetail.userDetails._id;
  const permission =
    store.getState().UserDetailReducer.UserDetail.userDetails.permission;
  console.log({ Id: permission });
  try {
    const response = await server.get({
      url: `/items/${permission === 'normal' ? 'user' : ''}`,
      token: store.getState().UserDetailReducer.UserDetail.token,
    });
    return response.data.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};
