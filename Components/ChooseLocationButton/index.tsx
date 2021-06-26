import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

import { Container } from './styles';
import { color } from './../../config';


interface ChooseLocationButtonProps {
  onPress?: any;
  text: string;
  btnStyle?: any
}

function ChooseLocationButton(props: ChooseLocationButtonProps) {
  
  const {
    onPress = {},
    text,
    btnStyle = {},
  } = props;

  return (
    <TouchableOpacity
    onPress={onPress}
  >
    <Text
      style={{ ...btnStyle, ...Styles.BtnStyle }}
    >
      {text}
    </Text>
  </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  BtnStyle: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: color.primary,
    color: '#fff',
    padding: 12,
    borderRadius: 5,
  }
})

export default ChooseLocationButton;
