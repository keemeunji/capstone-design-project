import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import COLORS from '../constants/colors';
import { styles } from '../styles/passwordInputStyles';

const PasswordConfirmationInput = ({ value, onChangeText }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>비밀번호 확인</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="비밀번호를 한번 더 입력해주세요."
          placeholderTextColor={COLORS.gray}
          secureTextEntry={!isPasswordVisible}
          style={styles.input}
          value={value}
          onChangeText={onChangeText}
        />
        <TouchableOpacity
          onPress={() => setIsPasswordVisible(!isPasswordVisible)}
          style={styles.toggleButton}
        >
          <Ionicons
            name={isPasswordVisible ? 'eye' : 'eye-off'}
            size={24}
            color={COLORS.black}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasswordConfirmationInput;