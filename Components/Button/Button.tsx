import React from 'react';
import {ButtonStyle, ButtonText} from './Button.styled';

export interface ButtonArgs {
  title: string;
  handleButton?: any;
}
export default function Button(props: ButtonArgs) {
  const {title, handleButton} = props;
  return (
    <ButtonStyle onPress={handleButton}>
      <ButtonText>{title}</ButtonText>
    </ButtonStyle>
  );
}
