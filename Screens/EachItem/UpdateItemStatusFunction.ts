import { server } from '../../server';
import store from '../../store';
interface Props {
  driverId: string;
  itemId: string;
}

const UpdateItemStatusFunction = async () => {
  const transitStatus = 'in-transit';
  try {
    const response = await server.get({
      url: `/items/user/${transitStatus}`,
      // data: {
      //   name: "string",
      //   destination: "string",
      //   addedBy: "string",
      //   status: "in-transit"
      // },
      token: store.getState().UserDetailReducer.UserDetail.token,
    });
    console.log({ AssignDriverLog: response });
    return response;
  } catch (error) {
    console.log({ error: error.response.data });
    throw error;
  }
};

export default UpdateItemStatusFunction;
