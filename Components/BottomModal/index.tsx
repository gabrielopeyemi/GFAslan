import React from 'react';
import { ReactNode } from 'react';
import { Modal } from 'react-native';

import { Text } from 'react-native';

import { Container } from './styles';

interface BottomModalProps {
  children: ReactNode;
}

const BottomModal = () => {
  const [show, setShow] = React.useState<boolean>(true);
  const close = () => setShow(!show);
  return (
    <Modal
      animationType={'fade'}
      transparent={true}
      visible={true}
      onRequestClose={close}>
      <Text>Hello</Text>
    </Modal>
  );
};

export default BottomModal;
