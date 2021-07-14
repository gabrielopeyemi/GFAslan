import React from 'react';
import {View} from 'react-native';
import moment from 'moment';
import TransactionArgs from '../../Screens/TransactionScreen/Transaction.dto';
import {
  CardBody,
  CardBodyText,
  CardFooter,
  CardFooterSender,
  CardFooterSenderTextBold,
  CardFooterSenderTextlight,
  CardHeader,
  CardStyle,
  CardSubTitle,
  CardTitle,
  StatusButton,
  StatusButtonText,
} from './Transaction.style';

export default function TransactionCard({transaction}: any) {
  console.log({transaction});
  const [statusColor, setStatusColor] = React.useState('black');
  const {status, name, description, destination, createdAt} = transaction;
  React.useEffect(() => {
    if (status === 'not-in-transit') {
      return setStatusColor('red');
    }
  }, []);
  return (
    <CardStyle>
      {/* Head */}
      <CardHeader>
        <View>
          <CardTitle>{name}</CardTitle>
          <CardSubTitle>
            {moment(createdAt).startOf('day').fromNow()}
          </CardSubTitle>
        </View>
        <StatusButton>
          <StatusButtonText color={statusColor}>{status}</StatusButtonText>
        </StatusButton>
      </CardHeader>

      {/* Body */}
      <CardBody>
        <CardBodyText>{description}</CardBodyText>
      </CardBody>

      {/* Footer */}
      <CardFooter>
        <CardFooterSender>
          <CardFooterSenderTextBold>{destination}</CardFooterSenderTextBold>
          <CardFooterSenderTextlight>
            No 18, Harmory st, Eleyele, Ibadan.
          </CardFooterSenderTextlight>
        </CardFooterSender>
        <CardFooterSender>
          <CardFooterSenderTextBold>Ibadan, Nigeria</CardFooterSenderTextBold>
          <CardFooterSenderTextlight>
            No 18, Harmory st, Eleyele, Ibadan.
          </CardFooterSenderTextlight>
        </CardFooterSender>
      </CardFooter>
    </CardStyle>
  );
}
