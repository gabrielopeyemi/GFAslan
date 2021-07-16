import styled from 'styled-components/native';
import {primaryColor} from '../../config';
import {Dimensions} from 'react-native';

const windowHeight = Dimensions.get('window').height;

export const ButtonStyle = styled.TouchableOpacity`
  width: 100%;
  background-color: ${primaryColor};
  display: flex;
  align-content: center;
  align-self: center;
  align-items: center;
  border-radius: 10px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  color: #f3effa;
  align-items: center;
  margin: 15px;
  font-size: 20px;
  font-weight: 700;
`;
