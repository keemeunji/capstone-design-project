import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import COLORS from '../constants/colors';
import { styles } from '../styles/passwordInputStyles';

const PasswordInput = ({ value, onChangeText }) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>비밀번호</Text>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="(영문, 숫자, 특수문자 포함 8자 이상 입력)"
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

export default PasswordInput;