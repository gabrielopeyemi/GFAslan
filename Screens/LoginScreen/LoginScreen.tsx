import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
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

const LoginScreen = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('famosipe2010@gmail.com');
  const [password, setPassword] = useState('opeyemi');

  const handleButton = async () => {
    console.log(`${email} ${password}`);
    try {
      const response = await LoginFunction({email, password});
      console.log(response);
      dispatch({
        type: 'LOGIN',
        payload: response,
      });
    } catch (error) {
      console.log(error);
    }
    // props.navigation.navigate('BottomNavigation');
  };
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
