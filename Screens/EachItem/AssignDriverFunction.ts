import { server } from '../../server';
import store from '../../store';
interface Props {
  driverId: string;
  itemId: string;
}

const AssignDriverFunction = async (props: Props) => {
  const { driverId, itemId } = props;
  try {
    const response = await server.post({
      url: '/items/assign-to-driver',
      data: {
        driverId,
        itemId,
      },
      token: store.getState().UserDetailReducer.UserDetail.token,
    });
    console.log({ AssignDriverLog: response });
    return response;
  } catch (error) {
    console.log({ error: error.response.data });
    throw error;
  }
};

export default AssignDriverFunction;
