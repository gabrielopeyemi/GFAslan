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

const RegisterScreen = (props: { navigation: { navigate: (arg0: string) => void; }; }) => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleButton = () => {
    console.log(`${email} ${password}`);
  }
  return (
    <MainControl>
      <Container>
        <Header>
          <Title>Let sign you up.</Title>
          <SubTitle>We are happy to</SubTitle>
          <SubTitle>have you</SubTitle>
        </Header>
        <Body>
          <TextInputu
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
          />
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
            <Link title="Login" onPress={() => props.navigation.navigate('Login')} />
          </FooterContainer>
          <Button title='Register' handleButton={handleButton} />
        </Footer>
      </Container>
    </MainControl>
  )
}

export default RegisterScreen;