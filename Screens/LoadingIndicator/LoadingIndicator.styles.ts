import styled from 'styled-components/native';
import {Dimensions} from 'react-native';

const AppHeight = Dimensions.get('window').height;
export const Container = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  align-content: center;
  height: ${AppHeight}px;
`;
