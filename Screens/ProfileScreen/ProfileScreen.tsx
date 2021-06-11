import React from 'react';
import {View, StyleSheet} from 'react-native';
import {MainControl} from '../../Assets/Styles/Main.Styled';
import {Container, Body} from '../../Assets/Styles/Auth.Styled';

import {Avatar, Title, Caption} from 'react-native-paper';

import Button from '../../Components/Button/Button';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const ProfileScreen = () => {
  const handleButton = () => {
    console.log('profile');
  };

  return (
    <MainControl>
      <Container>
        <View style={styles.userInfoSection}>
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
            }}>
            <Avatar.Icon icon="account" size={100} />
            <View style={{marginLeft: 20}}>
              <Title
                style={[
                  styles.title,
                  {
                    marginTop: 15,
                    marginBottom: 5,
                  },
                ]}>
                John Micheal
              </Title>
              <Caption style={styles.caption}>Admin</Caption>
            </View>
          </View>
        </View>

        <Body>
          <Caption> Username </Caption>
          <Title>John Fams</Title>

          <Caption> Email</Caption>

          <Title>John@gmail.com</Title>

          <Caption> Password </Caption>

          <Title> ******** </Title>
        </Body>

        <Button title="Update Profile" handleButton={handleButton} />
      </Container>
    </MainControl>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  userInfoSection: {
    paddingHorizontal: 30,
    marginBottom: 25,
  },
  caption: {
    fontSize: 14,
    lineHeight: 14,
    fontWeight: '500',
  },
  menuItem: {
    flexDirection: 'row',
    paddingVertical: 15,
    paddingHorizontal: 30,
  },
  menuItemText: {
    color: '#777777',
    marginLeft: 20,
    fontWeight: '600',
    fontSize: 16,
    lineHeight: 26,
  },
});

export default ProfileScreen;