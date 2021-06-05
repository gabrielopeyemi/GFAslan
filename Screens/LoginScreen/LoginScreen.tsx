import React, {useEffect, useState} from 'react';

//Paths
import { MainControl } from '../../Assets/Styles/Main.Styled';
import {
  Body,
  Container,
  Footer,
  FooterText,
  Header,
  SubTitle,
  Title,
} from '../../Assets/Styles/Auth.Styled';
import TextInputu from '../../Components/TextInput/TextInput';

export default function LoginScreen(props: { navigation: { navigate: (arg0: string) => void; }; }) {
  useEffect(() => {
    setTimeout(() => {
      props.navigation.navigate('Login');
    }, 2000);
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('d');
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
          <FooterText>Don’t have an account? Register</FooterText>
        </Footer>
      </Container>
    </MainControl>
  )
}

