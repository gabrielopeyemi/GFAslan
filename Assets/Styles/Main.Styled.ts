import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
export const MainControl = styled.View`
  background-color: #F3EFFA;
  height: ${windowHeight}px;
`;

