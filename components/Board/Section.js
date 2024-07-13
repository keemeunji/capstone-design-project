import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Section({ title, children, ...props }) {
  return (
    <View style={styles.container} {...props}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
});
