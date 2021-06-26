import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const Main = styled.View`
  height: ${windowHeight}px;
  background-color: #10091f;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const MainWe = styled.View`
  height: ${windowHeight}px;
  background-color: #10091f;
`;
