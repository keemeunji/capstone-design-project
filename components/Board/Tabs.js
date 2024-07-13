import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Tabs({ children, buttons, ButtonsContainer = View }) {
  return (
    <View style={styles.container}>
      <ButtonsContainer style={styles.buttonsContainer}>{buttons}</ButtonsContainer>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    backgroundColor: '#f0f0f0',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
});
