import React from 'react';

import { ActivityIndicator } from 'react-native';
import { Text } from 'react-native';
import { primaryColor } from '../../config';
import { Container } from './LoadingIndicator.styles';

function LoadingIndicator() {
  return (
    <Container>
      <ActivityIndicator size="large" color={primaryColor} />
      <Text style={{ color: primaryColor }}>Loading...</Text>
    </Container>
  );
}

export default LoadingIndicator;
