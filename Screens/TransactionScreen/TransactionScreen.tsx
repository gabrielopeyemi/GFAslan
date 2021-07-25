/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { Modal, Button, Stack, Center, NativeBaseProvider } from "native-base"
import { Alert, ScrollView, View } from 'react-native';
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
  const [modalVisible, setModalVisible] = React.useState(false)
  const [size, setSize] = React.useState("md")

  const handleSizeClick = (newSize) => {
    setSize(newSize)
    setModalVisible(!modalVisible)
  }

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
        <CardDiv>
          {transactions.map((transaction: TransactionArgs) => {
            console.log({ YU: transactions });
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
      <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            Sit nulla est ex deserunt exercitation anim occaecat. Nostrud
            ullamco deserunt aute id consequat veniam incididunt duis in sint
            irure nisi. Mollit officia cillum Lorem ullamco minim nostrud elit
            officia tempor esse quis. Sunt ad dolore quis aute consequat. Magna
            exercitation reprehenderit magna aute tempor cupidatat consequat
            elit dolor adipisicing. Mollit dolor eiusmod sunt ex incididunt
            cillum quis. Velit duis sit officia eiusmod Lorem aliqua enim
            laboris do dolor eiusmod. Et mollit incididunt nisi consectetur esse
            laborum eiusmod pariatur
          </Modal.Body>
          <Modal.Footer>
            <Button.Group variant="ghost" space={2}>
              <Button>SAVE</Button>
              <Button
                onPress={() => {
                  setModalVisible(!modalVisible)
                }}
                colorScheme="muted"
              >
                CLOSE
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </MainControl>
  );
}
