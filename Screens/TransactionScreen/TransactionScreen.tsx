import React from 'react';
import {Container} from '../../Assets/Styles/Auth.Styled';

import {MainControl} from '../../Assets/Styles/Main.Styled';
import TransactionCard from '../../Components/TransactionCard/TransactionCard';
import {GetAllTransaction} from './GetAllTransaction';
import {CardDiv} from './TransactionScreen.style';
import TransactionArgs from './Transaction.dto';

export default function TransactionScreen() {
  const [transactions, setTransactions] = React.useState<any[]>([]);

  const getAllTransaction = async () => {
    try {
      const response = await GetAllTransaction();
      console.log(response);
      setTransactions(response);
    } catch (error) {
      console.log(error);
    }
  };
  React.useEffect(() => {
    getAllTransaction();
  }, []);
  return (
    <MainControl>
      <Container>
        <CardDiv>
          {transactions.map((transaction: TransactionArgs) => {
            console.log({YU: transactions});
            return <TransactionCard transaction={transaction} />;
          })}
        </CardDiv>
      </Container>
    </MainControl>
  );
}
