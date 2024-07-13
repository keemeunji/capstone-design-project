import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/stringInputStyles';

const EmailInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>아이디(이메일)</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="chicky@naver.com"
          keyboardType="email-address"
          style={styles.input}
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );  
};

export default EmailInput;