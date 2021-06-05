import React from 'react';
import { Container } from '../../Assets/Styles/Auth.Styled';

import { MainControl } from '../../Assets/Styles/Main.Styled'
import TransactionCard from '../../Components/TransactionCard/TransactionCard';
import { CardDiv } from './TransactionScreen.style';

export default function TransactionScreen() {
  return (
    <MainControl>
      <Container>
        <CardDiv>
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
          <TransactionCard />
        </CardDiv>
      </Container>
    </MainControl>
  )
}
