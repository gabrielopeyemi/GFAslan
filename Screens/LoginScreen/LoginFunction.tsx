import {server} from '../../server';
interface Props {
  email: string;
  password: string;
}

const LoginFunction = async ({email, password}: Props) => {
  try {
    const response = await server.post({
      url: '/auth/login',
      data: {
        email,
        password,
      },
    });
    console.log({loginLog: response.data});
    return response.data;
  } catch (error) {
    console.log({error});
    throw error;
  }
};

export default LoginFunction;
