import styled from 'styled-components/native';
import {borderRadius, inputBGColor, primaryColor} from './../../config';

export const TextInputStyle = styled.TextInput`
  border: 1px solid ${primaryColor};
  border-radius: ${borderRadius}px;
  background-color: ${inputBGColor};
  width: 100%;
  color: ${primaryColor};
  font-size: 18px;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px 0;
  height: 60px;
`;
