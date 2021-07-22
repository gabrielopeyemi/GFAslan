import styled from 'styled-components/native';
import {primaryColor} from '../../config';
import { Dimensions } from 'react-native';

const {width, height }= Dimensions.get('window');
export const Container = styled.View`
  margin: 20px;
  height: ${height}px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ProfileImage = styled.TouchableOpacity`
  background-color: ${primaryColor};
  width: 80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 70px;
`;

export const ProfileText = styled.View`
  margin-left: 20px;
`;

export const ProfileName = styled.Text`
  font-size: 20px;
  font-weight: 700;
`;

export const ProfileEmail = styled.Text`
  color: grey;
`;

export const ProfileContainer = styled.View`
  margin: 5px 10px;
`;

export const ProfileHead = styled.Text`
  font-size: 20px;
  color: grey;
  font-weight: 700;
`;

export const ProfileValue = styled.Text``;

export const LogoutView = styled.Text`
  color: red;
  font-size: 20px;
  text-align: center;
`;

export const LogoutButton = styled.TouchableOpacity`
  width: 100%;
  position: absolute;
  bottom: 100px;
`;
