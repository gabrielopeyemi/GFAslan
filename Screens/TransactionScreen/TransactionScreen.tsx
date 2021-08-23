/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Modal, Button, Stack, Center, NativeBaseProvider } from 'native-base';
import { Alert, ScrollView, Text, View, RefreshControl } from 'react-native';
import { Container } from '../../Assets/Styles/Auth.Styled';
import { MainControl } from '../../Assets/Styles/Main.Styled';
import TransactionCard from '../../Components/TransactionCard/TransactionCard';
import { GetAllTransaction } from './GetAllTransaction';
import {
  CardDiv,
  Header,
  HeaderLeft,
  HeaderRight,
  ProfileName,
  ProfileText,
  ProfileView,
  TransactionView,
} from './TransactionScreen.style';
import TransactionArgs from './Transaction.dto';
import Icon from 'react-native-vector-icons/Ionicons';
import store from '../../store';
import { primaryColor } from '../../config';

export default function TransactionScreen(props: any) {
  const [transactions, setTransactions] = React.useState<any[]>([]);
  const [filteredTransaction, setFilteredTransaction] = React.useState<any[]>(
    [],
  );
  const [user, setUser] = React.useState<any>({});
  const [search, setSearch] = React.useState('');
  const [refreshing, setRefreshing] = React.useState(false);
  React.useEffect(() => {
    setUser(store.getState().UserDetailReducer.UserDetail.userDetails);
    getAllTransaction();
  }, []);
  const getAllTransaction = async () => {
    let permission = user.permission;
    try {
      const response = await GetAllTransaction();
      console.log(response);
      setTransactions(response);
      setFilteredTransaction(response);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRefresh = async () => {
    setRefreshing(true);
    getAllTransaction();
    setRefreshing(false);
  };

  return (
    <MainControl>
      <Container>
        <Header>
          <HeaderLeft>
            <ProfileView>
              <ProfileText>G</ProfileText>
            </ProfileView>
            <ProfileName>{user.username}</ProfileName>
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
        <ScrollView
          horizontal={false}
          refreshControl={
            <RefreshControl
              refreshing={refreshing}
              onRefresh={handleRefresh}
              colors={[`${primaryColor}`]}
            />
          }>
          {transactions.length === 0 ? (
            <TransactionView>
              <Text>No transaction yet</Text>
            </TransactionView>
          ) : (
            transactions.reverse().map((transaction: TransactionArgs) => {
              console.log({ YU: transaction });
              return (
                <TransactionCard
                  transaction={transaction}
                  key={transaction._id}
                  navigation={props.navigation}
                />
              );
            })
          )}
        </ScrollView>
      </Container>
    </MainControl>
  );
}
