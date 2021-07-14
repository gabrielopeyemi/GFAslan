import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import Toast from 'react-native-simple-toast';
import NetInfo from '@react-native-community/netinfo';
//Paths
import {MainControl} from '../../Assets/Styles/Main.Styled';
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
  navigation: {navigate: (arg0: string) => void};
}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('famosipe2010@gmail.com');
  const [password, setPassword] = useState('opeyemi');
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
    setIsLoading(true);
    try {
      const response = await LoginFunction({email, password});
      console.log(response);
      dispatch({
        type: 'LOGIN',
        payload: response,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      return Toast.show(error.response.data);
    }
    props.navigation.navigate('BottomNavigation');
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
          />
        </Body>
        <Footer>
          <FooterContainer>
            <FooterText>Don’t have an account? </FooterText>
            <Link
              title="Register"
              onPress={() => props.navigation.navigate('Register')}
            />
          </FooterContainer>
          <Button title="Login" handleButton={handleButton} />
        </Footer>
      </Container>
    </MainControl>
  );
};

export default LoginScreen;
