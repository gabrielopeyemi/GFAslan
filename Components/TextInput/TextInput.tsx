import React from 'react';
import {TextInputStyle} from './TextInput.Styled';

export interface InputArgs {
  text?: string;
  onChangeText?: any;
  placeholder?: string;
  value?: string;
  keyboardType?: string;
  secureTextEntry?: boolean;
}
export default function TextInput(props: InputArgs) {
  const {placeholder, onChangeText, value, keyboardType, secureTextEntry} = props;
  const handleText = (text: string): any => onChangeText(text);
  return (
    <TextInputStyle
      onChangeText={handleText}
      placeholder={placeholder}
      value={value}
      editable
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType ? keyboardType : 'default'}
    />
  );
}
