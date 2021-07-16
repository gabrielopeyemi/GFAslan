import React from 'react';
import {TextInputStyle} from './TextInput.Styled';

export interface InputArgs {
  text?: string;
  onChangeText?: any;
  placeholder?: string;
  value?: string;
}
export default function TextInput(props: InputArgs) {
  const {placeholder, onChangeText, value} = props;
  const handleText = (text: string): any => onChangeText(text);
  return (
    <TextInputStyle
      onChangeText={handleText}
      placeholder={placeholder}
      value={value}
      editable
    />
  );
}
