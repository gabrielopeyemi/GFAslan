import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Header, Body, Container} from '../../Assets/Styles/Auth.Styled';
import {MainControl} from '../../Assets/Styles/Main.Styled';
import Button from '../../Components/Button/Button';

import {TextInput, Title} from 'react-native-paper';
export default function TrackingScreen() {
  const [text, setText] = React.useState('');
  const handleButton = () => {
    console.log('Tracking screen');
  };

  return (
    <MainControl>
      <Container>
        <Header>
          <Title style={styles.headTitle}>Booking Information</Title>
          <Body>
            <TextInput
              mode="outlined"
              label="Wed 26, march 2020, 5: 30 PM"
              value={text}
              left={<TextInput.Icon name="calendar-month-outline" />}
              onChangeText={text => setText(text)}
            />

            <TextInput
              mode="outlined"
              label="Weight (Tones)"
              value={text}
              right={<TextInput.Icon name="tray-plus" />}
              left={<TextInput.Icon name="weight" />}
              onChangeText={text => setText(text)}
            />

            <TextInput
              mode="outlined"
              label="Goods types"
              value={text}
              right={<TextInput.Icon name="menu-down-outline" />}
              left={<TextInput.Icon name="calendar-month-outline" />}
              onChangeText={text => setText(text)}
            />

            <TextInput
              mode="outlined"
              label="Select Payment  "
              value={text}
              right={<TextInput.Icon name="menu-down-outline" />}
              left={<TextInput.Icon name="aws" />}
              onChangeText={text => setText(text)}
            />
          </Body>
        </Header>
        <Button title="Proceed to book" handleButton={handleButton} />
      </Container>
    </MainControl>

    // <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    //   <Text>TrackingScreen!</Text>
    // </View>
  );
}

const styles = StyleSheet.create({
  headTitle: {
    margin: 20,

    fontSize: 33,
    fontWeight: '100',
  },
});
