import {server} from '../../server';
interface Props {
  email: string;
  password: string;
  fullName?: string;
  username: string;
  gender: string;
}

const RegisterFunction = async ({
  email,
  password,
  fullName,
  username,
  gender,
}: Props) => {
  try {
    const response = await server.post({
      url: '/users/create',
      data: {
        email,
        password,
        username,
        fullName,
        dateOfBirth: {
          year: 0,
          month: 0,
          day: 0,
        },
        gender,
        permission: 'normal',
      },
    });
    console.log({loginLog: response.data});
    return response.data;
  } catch (error) {
    console.log({ error });
    throw error;
  }
};

export default RegisterFunction;
