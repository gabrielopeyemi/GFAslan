import React from 'react';
import {Dimensions, View} from 'react-native';
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
const screen = Dimensions.get('window');
const ASPECT_RATIO = screen.width / screen.height;
const LATITUDE_DELTA = 0.9222;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

interface PropsArgs {
  transaction: any;
  navigation: any;
}
export default function TransactionCard({transaction, navigation}: PropsArgs) {
  console.log({transaction});
  const [statusColor, setStatusColor] = React.useState('black');
  const {status, name, description, destination, createdAt} = transaction;
  React.useEffect(() => {
    if (status === 'not-in-transit') {
      return setStatusColor('red');
    }
  }, []);
  const Location: any = {
    driver: {
      latitude: 7.293186279820373,
      longitude: 5.149915105760385,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
    destination: {
      latitude: 7.291403,
      longitude: 5.142603,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  };
  return (
    <CardStyle
      onPress={() =>
        navigation.navigate('ShowItemLocation', {Locations: Location})
      }>
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
