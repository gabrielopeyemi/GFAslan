import styled from 'styled-components/native';
import { borderRadius, primaryColor } from '../../config';

export const Container = styled.ScrollView`
  margin: 20px;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
`;

export const Main = styled.View`
  margin-top: 70px;
`;

export const TitleView = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TitleViewStatus = styled.Text<{color?: string}>`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${p => (p.color ? p.color : 'blue')};
`;

export const TitleText = styled.Text`
  font-size: 20px;
  font-weight: 700;
  text-transform: capitalize;
`;

export const Body = styled.View``;

export const BodyTitle = styled.Text`
  font-size: 20px;
  font-weight: 600;
`;

export const BodyValue = styled.Text`
  font-size: 15px;
  color: grey;
  font-weight: 600;
`;

export const BodyStatus = styled.Text<{color?: string}>`
  border-radius: 5px;
  color: #fff;
  padding: 3px 10px;
  background-color: ${p => (p.color ? p.color : 'blue')};
`;

export const BodyView = styled.View`
  margin: 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* align-self: center; */
  margin-top: 20px;
  align-content: center;
  align-items: center;
`;

export const ButtonCheck = styled.Text`
  text-align: center;
  padding: 10px;
  background-color: ${primaryColor};
  color: #fff;
  font-weight: 700;
  border-radius: ${borderRadius}px;
  padding: 15px;
  margin-top: 20px;
`;

export const Hr = styled.View`
  height: 1px;
  background-color: grey;
  align-self: stretch;
  margin: 10px 0;
`;
