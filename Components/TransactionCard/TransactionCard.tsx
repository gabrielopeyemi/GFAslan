import React from 'react';
import { View } from 'react-native';
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
} from './Transaction.style'

export default function TransactionCard() {
  return (
    <CardStyle>

      {/* Head */}
      <CardHeader>
        <View>
          <CardTitle>
            Gah
          </CardTitle>
          <CardSubTitle>
            27.12.2010
          </CardSubTitle>
        </View>
        <StatusButton>
          <StatusButtonText>Process</StatusButtonText>
        </StatusButton>
      </CardHeader>

      {/* Body */}
      <CardBody>
        <CardBodyText>
          Glass and ceramics
        </CardBodyText>
      </CardBody>

      {/* Footer */}
      <CardFooter>
        <CardFooterSender>
          <CardFooterSenderTextBold>
            Ibadan, Nigeria
          </CardFooterSenderTextBold>
          <CardFooterSenderTextlight>
          No 18, Harmory st,
          Eleyele, Ibadan.
          </CardFooterSenderTextlight>
        </CardFooterSender>
        <CardFooterSender>
          <CardFooterSenderTextBold>
            Ibadan, Nigeria
          </CardFooterSenderTextBold>
          <CardFooterSenderTextlight>
          No 18, Harmory st,
          Eleyele, Ibadan.
          </CardFooterSenderTextlight>
        </CardFooterSender>
      </CardFooter>
    </CardStyle>
  )
}
