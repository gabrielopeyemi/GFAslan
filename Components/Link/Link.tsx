import React from 'react';
import { LinkStyle, LinkText } from './Link.Style';

interface LinkArgs {
  title?: string;
  onPress?: any;
}
export default function Link(props: LinkArgs) {
  const { title, onPress } = props;
  return (
    <LinkStyle onPress={onPress}>
      <LinkText>{ title }</LinkText>
    </LinkStyle>
  )
}
