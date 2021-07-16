import React, {ReactNode} from 'react';
import {ScrollView, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Header,
  HeaderLeft,
  HeaderRight,
  ModelBody,
} from './FullModal.styles';

interface FullModalProps {
  children: ReactNode;
  animationType?: any;
  visible?: boolean;
  onRequestClose?: any;
  transparent?: boolean;
  title?: string;
}

function FullModal({
  children,
  animationType,
  visible,
  onRequestClose,
  transparent,
  title,
}: FullModalProps) {
  return (
    <Container
      animationType={animationType}
      visible={visible}
      transparent={transparent}
      onRequestClose={onRequestClose}>
      <ModelBody>
        <Header>
          <HeaderLeft
            style={{fontFamily: "'Poppins', sans-serif", fontWeight: '900'}}>
            {title ? title : 'title'}
          </HeaderLeft>
          <HeaderRight>
            <Icon
              name="keyboard-arrow-down"
              color="#0000ff"
              size={30}
              onPress={onRequestClose}
            />
          </HeaderRight>
        </Header>
        <ScrollView>{children}</ScrollView>
      </ModelBody>
    </Container>
  );
}

export default FullModal;
