/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Alert, ScrollView, View} from 'react-native';
import {Container} from '../../Assets/Styles/Auth.Styled';
import {MainControl} from '../../Assets/Styles/Main.Styled';
import TransactionCard from '../../Components/TransactionCard/TransactionCard';
import {GetAllTransaction} from './GetAllTransaction';
import {
  CardDiv,
  Header,
  HeaderLeft,
  HeaderRight,
  ProfileName,
  ProfileText,
  ProfileView,
} from './TransactionScreen.style';
import TransactionArgs from './Transaction.dto';
import Icon from 'react-native-vector-icons/Ionicons';
import store from '../../store';

export default function TransactionScreen(props: any) {
  const [transactions, setTransactions] = React.useState<any[]>([]);
  const [user, setUser] = React.useState<any>({});
  React.useEffect(() => {
    setUser(store.getState().UserDetailReducer.UserDetail.userDetails);
  }, []);
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

  const [curLoc, setCurLoc] = React.useState({});

  const fetchPickupCords = (lat: number, log: number) => {
    console.log('Log ====>', log);
    setCurLoc(...curLoc);
  };
  return (
    <MainControl>
      <Container>
        <Header>
          <HeaderLeft>
            <ProfileView>
              <ProfileText>G</ProfileText>
            </ProfileView>
            <ProfileName>{user.firstName}</ProfileName>
          </HeaderLeft>
          <HeaderRight>
            <Icon.Button
              name="ios-add-circle-outline"
              backgroundColor="#26385f"
              onPress={() => props.navigation.navigate('AddTransaction')}>
              Add New
            </Icon.Button>
          </HeaderRight>
        </Header>
        <CardDiv>
          {transactions.map((transaction: TransactionArgs) => {
            console.log({YU: transactions});
            return (
              <TransactionCard
                transaction={transaction}
                key={transaction._id}
                navigation={props.navigation}
              />
            );
          })}
        </CardDiv>
      </Container>
    </MainControl>
  );
}
