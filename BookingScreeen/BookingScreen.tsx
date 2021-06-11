import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import {MainControl} from '../../Assets/Styles/Main.Styled';
import {
  Body,
  Container,
  Footer,
  FooterContainer,
  FooterText,
  Header,
  SubTitle,
} from '../../Assets/Styles/Auth.Styled';

import Button from '../../Components/Button/Button';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple,
} from 'react-native-paper';

const TransactionScreen = () => {
  const handleBooking = () => {
    console.log('profile');
  };

  return (
    <MainControl>
      <Container>
        <Header style={styles.transactionInfo}>
          <View style={styles.busIcon}>
            <Avatar.Icon icon="bus" size={130} color="#FFFFFF" />
          </View>
          <Title style={styles.headTitle}>TATA-456</Title>
          <Text>75ft X 4.5ft X 4.2ft (LUT, YTH)</Text>
        </Header>
        <Body>
          <Caption> Sender </Caption>
          <Title>John Fams</Title>

          <Caption> Address </Caption>

          <Title>Ibadan, Nigeria.</Title>

          <Caption> Reciever </Caption>

          <Title> Wale Fams</Title>
          <Caption> Address </Caption>

          <Title>Abuja, Nigeria.</Title>
        </Body>
        <Button title=" Confirm Booking" handleButton={handleBooking} />
      </Container>
    </MainControl>

    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>TransactionScreen!</Text>
    // </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  transactionInfo: {
    alignItems: 'center',
  },
  bodyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },

  bodySubTitle: {
    color: '#807E84',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },

  busIcon: {
    flexDirection: 'row',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default TransactionScreen;
