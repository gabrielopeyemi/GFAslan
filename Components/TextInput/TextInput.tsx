import React from 'react';
import {TextInputStyle} from './TextInput.Styled';

export interface InputArgs {
  text?: string;
  onChangeText?: any;
  placeholder?: string;
  value?: string;
  keyboardType?: string;
}
export default function TextInput(props: InputArgs) {
  const {placeholder, onChangeText, value, keyboardType} = props;
  const handleText = (text: string): any => onChangeText(text);
  return (
    <TextInputStyle
      onChangeText={handleText}
      placeholder={placeholder}
      value={value}
      editable
      keyboardType={keyboardType ? keyboardType : 'default'}
    />
  );
}
