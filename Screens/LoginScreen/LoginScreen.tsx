import React, {useEffect, useState} from 'react';

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

const LoginScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleButton = () => {
    console.log(`${email} ${password}`);
    props.navigation.navigate('BottonNavigation');
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
            <FooterText>Don’t have an account?
            {' '}</FooterText>
            <Link title="Register" onPress={() => props.navigation.navigate('Register')} />
          </FooterContainer>
          <Button title='Login' handleButton={handleButton} />
        </Footer>
      </Container>
    </MainControl>
  )
}

export default LoginScreen;
