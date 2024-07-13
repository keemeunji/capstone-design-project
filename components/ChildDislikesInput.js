import React, { useState } from 'react';
import { View, Text, TextInput,  } from 'react-native';
import COLORS from '../constants/colors';
import { styles } from '../styles/stringInputStyles';

const ChildDislikesInput = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>아이가 싫어하는 것</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="없다면 '없음'을 입력하세요."
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

export default ChildDislikesInput;