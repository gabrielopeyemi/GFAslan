import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
export const Container = styled.Modal`
  width: ${width}px;
  height: ${height}px;
`;

export const ModelBody = styled.View``;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px;
  align-items: center;
  align-content: center;
  /* background-color: #ffff00; */
`;

export const HeaderLeft = styled.Text`
  font-size: 20px;
  font-weight: 900;
  /* font-family: 'Poppins', sans-serif; */
`;

export const HeaderRight = styled.View`
  
`;
