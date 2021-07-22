import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;
export const MainControl = styled.ScrollView`
  background-color: #F3EFFA;
  height: ${windowHeight}px;
`;

