import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
//Paths
import { MainControl } from '../../Assets/Styles/Main.Styled';
import {
  Body,
  Container,
  Footer,
  FooterContainer,
  FooterText,
  Header,
  SubTitle,
  Title,
} from '../../Assets/Styles/Auth.Styled';
import TextInputu from '../../Components/TextInput/TextInput';
import Button from '../../Components/Button/Button';
import Link from '../../Components/Link/Link';
import LoginFunction from './LoginFunction';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';

const LoginScreen = (props: {
  navigation: { navigate: (arg0: string) => void };
}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [netWorkIsConnected, setNetWorkIsConnected] = useState<any>(false);
  React.useEffect(() => {
    NetInfo.fetch().then(state => {
      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      setNetWorkIsConnected(state.isConnected);
    });
  }, []);

  const handleButton = async () => {
    console.log(`${email} ${password}`);
    if (!netWorkIsConnected) {
      Toast.show('no internet connection');
      return;
    }
    if (!email || !password) {
      Toast.show('input username or password');
      return;
    }
    if ( email || password) {
      let rjx = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2.8})?$/;
      let isValid = rjx.test(email);
      if (!isValid) {
        return Toast.show('Invalid Email');
      }
      setIsLoading(true);
      try {
        const response = await LoginFunction({ email, password });
        console.log(response);
        dispatch({
          type: 'LOGIN',
          payload: response,
        });
        setIsLoading(false);
        switch (response.userDetails.permission) {
          case 'normal':
            console.log('this is user');
            props.navigation.navigate('BottomNavigationAdmin');
            break;
          case 'driver':
            console.log('this is a driver');
            props.navigation.navigate('DriveScreen');
            break;
          case 'admin':
            console.log('this is admin');
            props.navigation.navigate('BottomNavigationAdmin');
            break;
          default:
            console.log('who are u?');
        }
      } catch (errorResponse) {
        console.log({ errorResponse });
        console.log('900e');
        setIsLoading(false);
        return Toast.show(errorResponse.error);
      }
    } else {
      return Toast.show('Please complete the field');
    }
  };
  if (isLoading) {
    return <LoadingIndicator />;
  }
  return (
    <MainControl>
      <Container>
        <Header>
          <Title>Let sign you in.</Title>
          <SubTitle>Welcome back.</SubTitle>
          <SubTitle>You’ve been missed</SubTitle>
        </Header>
        <Body>
          <TextInputu
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInputu
            placeholder="Password"
            onChangeText={setPassword}
            value={password}
            secureTextEntry={true}
          />
        </Body>
        <Footer>
          <FooterContainer>
            <FooterText>Don’t have an account? </FooterText>
            <Link
              title="Register"
              onPress={() => props.navigation.navigate('RegisterOne')}
            />
          </FooterContainer>
          <Button title="Login" handleButton={handleButton} />
        </Footer>
      </Container>
    </MainControl>
  );
};

export default LoginScreen;
