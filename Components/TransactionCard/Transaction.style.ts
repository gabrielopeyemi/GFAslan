import styled from 'styled-components/native';

export const CardStyle = styled.View`
  margin: 10px 0;
  width: 100%;
  background-color: #FFFFFF;
  padding: 20px;
  border-radius: 10px;
`;

export const CardHeader = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-content: center;
  /* align-items: center; */
`;

export const CardTitle = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: #21123F;
`;

export const CardSubTitle = styled.Text`
  font-size: 20px;
  color: #21123F;
`;

export const StatusButton = styled.TouchableOpacity`
  
`;

export const StatusButtonText = styled.Text`
  background-color: #3F927D;
  padding: 3px 6px;
  border-radius: 5px;
  color: #fff;
`;

export const CardBody = styled.View`
  margin: 10px 0;
`;

export const CardBodyText = styled.Text`
font-weight: 600;
font-size: 20px;
color: #21123F;
`;

export const CardFooter = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const CardFooterSender = styled.View`
  width: 48%;
`;

export const CardFooterSenderTextBold = styled.Text`
  font-weight: 700;
  font-size: 20px;
  color: #21123F;
`;

export const CardFooterSenderTextlight = styled.Text`
  font-size: 15px;
  color: #21123F;
`;