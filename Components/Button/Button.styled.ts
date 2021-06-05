import styled from 'styled-components/native';
import { color } from '../../config';
import { Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;
const { primary } = color;
export const ButtonStyle = styled.TouchableOpacity`
  width: 100%;
  background-color: ${primary};
  display: flex;
  align-content: center;
  align-self: center;
  align-items: center;
  border-radius: 10px;
`;

export const ButtonText = styled.Text`
  color: #F3EFFA;
  align-items: center;
  margin: 15px;
  font-size: 20px;
  font-weight: 700;
`;