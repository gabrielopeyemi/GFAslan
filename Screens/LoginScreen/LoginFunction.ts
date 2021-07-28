import { server } from '../../server';
interface Props {
  email: string;
  password: string;
}

const LoginFunction = async ({ email, password }: Props) => {
  try {
    const response = await server.post({
      url: '/auth/login',
      data: {
        email,
        password,
      },
    });
    console.log({ loginLog: response });
    return response.data;
  } catch (error) {
    console.log({ LoginErrorLog: error.response.data });
    throw error.response.data;
  }
};

export default LoginFunction;
