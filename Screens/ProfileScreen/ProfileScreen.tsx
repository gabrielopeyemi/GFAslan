import React from 'react';
import {useDispatch} from 'react-redux';
import {
  Container,
  Header,
  LogoutButton,
  LogoutView,
  ProfileContainer,
  ProfileEmail,
  ProfileHead,
  ProfileImage,
  ProfileName,
  ProfileText,
  ProfileValue,
} from './ProfileScreen.style';
import Icon from 'react-native-vector-icons/FontAwesome';
import store from '../../store';
import {TouchableOpacity, View} from 'react-native';

export default function ProfileScreen(props: any) {
  const dispatch = useDispatch();
  const [user, setUser] = React.useState<any>({});
  React.useEffect(() => {
    setUser(store.getState().UserDetailReducer.UserDetail.userDetails);
  }, []);
  const {username, permission, email, gender, fullName} = user;
  const handleLogout = () => {
    console.log('Logging out');
    dispatch({
      type: 'LOGIN',
      payload: null,
    });
    props.navigation.navigate('Login');
  };
  return (
    <Container>
      <Header>
        <ProfileImage onPress={() => console.log('profile press')}>
          <Icon
            name="user"
            size={40}
            color="#fff"
            onPress={() => props.navigation.goBack()}
          />
        </ProfileImage>
        <ProfileText>
          <ProfileName>{fullName}</ProfileName>
          <ProfileEmail>{permission}</ProfileEmail>
        </ProfileText>
      </Header>
      <View style={{marginTop: 20}}>
        <ProfileContainer>
          <ProfileHead>Username</ProfileHead>
          <ProfileValue>{username}</ProfileValue>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileHead>Email</ProfileHead>
          <ProfileValue>{email}</ProfileValue>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileHead>Gender</ProfileHead>
          <ProfileValue>{gender}</ProfileValue>
        </ProfileContainer>
        <ProfileContainer>
          <ProfileHead>Language</ProfileHead>
          <ProfileValue>English</ProfileValue>
        </ProfileContainer>
      </View>
      <LogoutButton onPress={handleLogout}>
        <LogoutView>Logout</LogoutView>
      </LogoutButton>
    </Container>
  );
}
