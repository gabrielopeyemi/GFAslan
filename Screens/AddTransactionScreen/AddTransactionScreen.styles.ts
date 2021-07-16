import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');

export const Container = styled.View`
  height: ${height}px;
`;
export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 0;
  align-items: center;
  align-content: center;
  /* background-color: #ffff00; */
`;

export const HeaderLeft = styled.Text`
  font-size: 23px;
  font-weight: 900;
  /* font-family: 'Poppins', sans-serif; */
`;

export const HeaderRight = styled.View`
  
`;