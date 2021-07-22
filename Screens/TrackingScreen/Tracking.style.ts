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
