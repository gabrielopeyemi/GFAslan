import React, { useEffect } from 'react';
import { Main } from './SplashScreen.Styled';
import TriangleDown from './../../Components/Logo/Logo';

const SplashScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 2000);
  }, []);
  return (
    <Main>
      <TriangleDown />
    </Main>
  )
}

export default SplashScreen;