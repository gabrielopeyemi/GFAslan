import { keyframes } from 'styled-components';
import styled from 'styled-components/native';

export const TopView = styled.View`
  position: absolute;
  top: 0px;
  background-color: #fff;
  width: 100%;
  padding: 20px;
  text-align: center;
  align-items: center;
`;

export const CasView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

export const BottomText = styled.Text`
  background-color: #000;
  width: 100%;
  padding: 10px 0;
  color: #fff;
  text-align: center;
  font-weight: 500;
  display: flex;
  flex-direction: row;
`;

export const BottomView = styled.View`
  position: absolute;
  border-radius: 0px;
  background-color: #fff;
  width: 100%;
  padding: 20px;
  text-align: center;
  align-items: center;
  bottom: 40px;
`;
const User = keyframes`
0% {
    -moz-transform: scale(0);
    opacity: 0.0;
 }
 25% {
    -moz-transform: scale(0);
    opacity: 0.1;
 }
 50% {
    -moz-transform: scale(0.1);
    opacity: 0.3;
 }
 75% {
    -moz-transform: scale(0.5);
    opacity: 0.5;
 }
 100% {
    -moz-transform: scale(1);
    opacity: 0.0;
 }
`;
export const Pulse = styled.View`
  width: 10px;
  height: 10px;
  border: 5px solid #f7f14c;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  background-color: #716f42;
  z-index: 10;
  position: absolute;
`;

export const Dot = styled.View`
  border: 10px solid #fff601;
  background: transparent;
  /* -webkit-border-radius: 60px;
  -moz-border-radius: 60px; */
  border-radius: 60px;
  height: 50px;
  width: 50px;
  /* -webkit-animation: ${User} 3s ease-out;
  -moz-animation: ${User} 3s ease-out; */
  animation: ${User} 3s ease-out;
  /* -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite; */
  animation-iteration-count: infinite;
  position: absolute;
  top: -25px;
  left: -25px;
  z-index: 1;
  opacity: 0;
`;
