import styled from 'styled-components/native';
import { primaryColor, inputBGColor, borderRadius } from '../../config';
import { Dimensions } from 'react-native';

let { height } = Dimensions.get('window');

export const Container = styled.View`
  height: ${height}px;
`;

export const StartButton = styled.TouchableOpacity<{ state?: boolean }>`
  width: 100%;
  height: 50px;
  background-color: ${p => (p.state ? inputBGColor : primaryColor)};
  color: #fff;
  margin-top: 100px;
  position: absolute;
  bottom: 120px;
  border-radius: ${borderRadius}px;
`;

export const MainView = styled.View`
  height: 100%;
`;

export const HeaderView = styled.View`
  height: 100px;
  width: 100%;
  background-color: ${primaryColor};
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  align-self: center;
`;

export const ProfileView = styled.View`
  width: 50px;
  height: 50px;
  background-color: white;
  border-radius: 50px;
`;

export const TextStyle = styled.Text`
  font-size: 23px;
  font-weight: 700;
  margin-left: 10px;
  color: white;
`;


export const TextStyleSmall = styled.Text`
  font-size: 12px;
  margin-left: 10px;
  color: white;
`;
