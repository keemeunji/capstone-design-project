import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import COLORS from '../constants/colors';
import { styles } from '../styles/stringInputStyles';

const ChildNameInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>아이의 이름</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="아이의 이름을 입력해주세요."
          placeholderTextColor={COLORS.gray}
          secureTextEntry={false}
          style={styles.input}
          keyboardType="default"
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    </View>
  );
};

export default ChildNameInput;