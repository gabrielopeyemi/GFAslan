import styled from 'styled-components/native';
import { color } from './../../config';

const { primary } = color;
export const TextInputStyle = styled.TextInput`
  border: 1px solid ${primary};
  border-radius: 15px;
  background-color: #B1ACBA;
  width: 100%;
  color: ${primary};
  font-size: 18px;
  display: flex;
  padding-left: 20px;
  padding-right: 20px;
  margin: 10px 0;
  height: 60px;
`;
