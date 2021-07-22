import styled from 'styled-components/native';
import {primaryColor} from '../../config';

export const CardDiv = styled.ScrollView``;

export const Header = styled.View`
  display: flex;
  margin: 10px;
  flex-direction: row;
  justify-content: space-between;
`;

export const HeaderRight = styled.View`
  display: flex;
  flex-direction: row;
  /* align-self: center; */
  justify-content: center;
  /* align-content: center; */
  align-items: center;
`;

export const HeaderLeft = styled.View`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  align-content: center;
  align-items: center;
`;

export const ProfileView = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${primaryColor};
  display: flex;
  align-items: center;
  align-content: center;
  align-self: center;
  justify-content: center;
  border-radius: 50px;
`;

export const ProfileText = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 25px;
`;

export const ProfileName = styled.Text`
  font-size: 15px;
  margin-left: 10px;
`;

export const AddTransaction = styled.Text`

`;
