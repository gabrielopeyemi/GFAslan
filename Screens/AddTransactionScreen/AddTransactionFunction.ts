import { server } from '../../server';
import store from '../../store';
interface Props {
  packageName?: string;
  receiverName?: string;
  packageDescription?: string;
  receiverPhoneNumber?: string;
  receiverLocation: {
    lat: number;
    lng: number;
    address: string;
  };
}

const AddTransactionFunction = async ({
  packageName,
  receiverName,
  receiverPhoneNumber,
  receiverLocation,
  packageDescription,
}: Props) => {
  try {
    const response = await server.post({
      url: '/items/add',
      data: {
        name: packageName,
        description: packageDescription,
        destination: receiverLocation.address,
        receiverDetails: {
          address: {
            lat: receiverLocation.lat.toString(),
            lng: receiverLocation.lng.toString(),
            address: receiverLocation.address,
          },
          name: receiverName,
          phoneNumber: receiverPhoneNumber,
        },
      },
      token: store.getState().UserDetailReducer.UserDetail.token,
    });
    console.log({ AddTransactionLog: response });
    return response;
  } catch (error) {
    console.log({ error: error.response.data });
    throw error;
  }
};

export default AddTransactionFunction;
