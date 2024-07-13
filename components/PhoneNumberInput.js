import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import COLORS from '../constants/colors';

const PhoneNumberInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>연락처</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="- 없이 입력해주세요."
          keyboardType="phone-pad"
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );  
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginTop: 15,
    marginBottom: 8,
  },
  inputContainer: {
    width: '100%',
    height: 48,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: -10,
    justifyContent: 'center',
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  input: {
    flex: 1,
    height: '100%',
    fontSize: 14,
  },
  invalidInput: {
    borderColor: 'red',
  },
  errorMessage: {
    color: 'red',
  },
});

export default PhoneNumberInput;