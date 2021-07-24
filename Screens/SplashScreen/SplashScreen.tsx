import React, { useEffect } from 'react';
import { Main } from './SplashScreen.Styled';
import TriangleDown from './../../Components/Logo/Logo';
import { useDispatch } from 'react-redux';
import { getCurrentLocation } from '../../helper/helperfunction';

const SplashScreen = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    Location();
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 2000);
  }, []);
  const Location = async () => {
    try {
      const response = await getCurrentLocation();
      console.log({ response });
      dispatch({
        type: 'LOCATION',
        payload: response,
      });
    } catch (error) {
      console.log({ error });
    }
  };
  return (
    <Main>
      <TriangleDown />
    </Main>
  );
};

export default SplashScreen;
