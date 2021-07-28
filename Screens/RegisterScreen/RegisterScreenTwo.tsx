/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import Toast from 'react-native-simple-toast';
import {useDispatch} from 'react-redux';
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
import {Text, TouchableOpacity} from 'react-native';
import RegisterFunction from './RegisterFunction';
import LoadingIndicator from '../LoadingIndicator/LoadingIndicator';
interface PropsArgs {
  navigation: {
    navigate: (arg0: string) => void;
  };
  route?: {
    name: string;
    key: string;
    params: {
      data: any;
    };
  };
}

const RegisterScreenTwo = (props: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log({props: props.route.params.data});
  }, []);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [gender, setGender] = useState('male');
  const [password, setPassword] = useState('opeyemi');
  const [confirmPassword, setConfirmPassword] = useState('opeyemi');
  const handleButton = async () => {
    setIsLoading(true);
    const {fullName, email, username} = props.route.params.data;
    console.log(`${fullName} ${email} ${username}`);
    if ((gender !== 'male') | 'female') {
      setIsLoading(false);
      Toast.show('Gender has to be male or female');
      return;
    }
    if (password !== confirmPassword) {
      setIsLoading(false);
      Toast.show('Password Dont match');
      return;
    }
    try {
      const response = await RegisterFunction({
        fullName,
        email,
        username,
        password,
        gender,
      });
      console.log({response});
      if (response.data.success) {
        setIsLoading(false);
        dispatch({
          type: 'LOGIN',
          payload: response.data,
        });
        props.navigation.navigate('Login');
      }
    } catch (error) {
      setIsLoading(false);
      console.log({error: error.response.data});
      Toast.show(error.response.data.error);
    }
  };
  if (isLoading) {
    return <LoadingIndicator />;
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
          <Text style={{fontWeight: '700', marginLeft: 10}}>Step 2/2</Text>
          <TextInputu
            placeholder="Gender"
            onChangeText={setGender}
            value={gender}
          />
          <TextInputu
            placeholder="Confirm Password"
            onChangeText={setConfirmPassword}
            value={confirmPassword}
            secureTextEntry={true}
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
              title="Login"
              onPress={() => props.navigation.navigate('Login')}
            />
          </FooterContainer>
          <Button title="Register" handleButton={handleButton} />
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <Text style={{textAlign: 'center', fontWeight: '700'}}> Back</Text>
          </TouchableOpacity>
        </Footer>
      </Container>
    </MainControl>
  );
};

export default RegisterScreenTwo;
