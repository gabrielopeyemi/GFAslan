import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;
export const Container = styled.View`
  margin: 0px 20px;
  display: flex;
  height: ${windowHeight}px;
`;

export const Header = styled.View`
  margin: 50px 0;
`;

export const Title = styled.Text`
  font-size: 50px;
  font-weight: 700;
`;

export const SubTitle = styled.Text`
  font-size: 35px;
`;

export const Body = styled.View``;

export const Footer = styled.View`
  display: flex;
  bottom: 40px;
  justify-content: flex-end;
  position: absolute;
  width: 100%;
`;

export const FooterText = styled.Text`

`;