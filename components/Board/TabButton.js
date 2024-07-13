import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function TabButton({ children, isSelected, ...props }) {
  console.log('TABBUTTON COMPONENT EXECUTING');
  return (
    <TouchableOpacity
      style={[styles.tabButton, isSelected && styles.activeTabButton]}
      {...props}
    >
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  tabButton: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTabButton: {
    borderBottomColor: 'blue',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
