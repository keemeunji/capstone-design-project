import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from '../styles/stringInputStyles';
import COLORS from '../constants/colors';

const NameInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>이름</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="홍길동"
          placeholderTextColor={COLORS.gray}
          secureTextEntry={false}
          style={styles.input}
          inputMode='text'
          // keyboardType="number-pad"
          onChangeText={onChangeText}
          value={value}
        />
      </View>
    </View>
  );  
};

export default NameInput;