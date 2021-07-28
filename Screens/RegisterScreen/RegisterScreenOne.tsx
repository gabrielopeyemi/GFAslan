/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';

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
import {Text} from 'react-native';
import Toast from 'react-native-simple-toast';

const RegisterScreenOne = (props: {
  navigation: {navigate: (arg0: string) => void};
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const handleButton = () => {
    console.log(`${fullName} ${email} ${username}`);
    const data: any = {
      fullName,
      email,
      username,
    };
    if (fullName || email || username) {
      let rjx = /^([a-zA-Z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2.8})?$/;
      let isValid = rjx.test(email);
      if (!isValid) {
        return Toast.show('Invalid Email');
      }
      props.navigation.navigate('RegisterTwo', {data});
    } else {
      return Toast.show('Please complete the field');
    }
  };
  return (
    <MainControl>
      <Container>
        <Header>
          <Title>Let sign you up.</Title>
          <SubTitle>We are happy to</SubTitle>
          <SubTitle>have you</SubTitle>
        </Header>
        <Body>
          <Text style={{fontWeight: '700', marginLeft: 10}}>Step 1/2</Text>
          <TextInputu
            placeholder="Full Name"
            onChangeText={setFullName}
            value={fullName}
          />
          <TextInputu
            placeholder="Email"
            onChangeText={setEmail}
            value={email}
          />
          <TextInputu
            placeholder="Username"
            onChangeText={setUsername}
            value={username}
          />
        </Body>
        <Footer>
          <FooterContainer>
            <FooterText>Don’t have an account? </FooterText>
            <Link
              title="Login"
              onPress={() => props.navigation.navigate('Login')}
            />
          </FooterContainer>
          <Button title="Next" handleButton={handleButton} />
        </Footer>
      </Container>
    </MainControl>
  );
};

export default RegisterScreenOne;
