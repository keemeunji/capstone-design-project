import { View, Text, Image, Pressable, Alert } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import Button from '../../components/Button';
import COLORS from '../../constants/colors';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import axios from 'axios';
import { styles } from '../../styles/loginScreenStyles';

const API_URL = 'http://192.168.0.235:8080';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
    const handleLogin = async () => {
    try {
      const response = await axios.post(`${API_URL}/member/login`, {
        email: email,
        password: password,
      });
      if (response.data.success) {
        const userId = response.data.data.userId;
        Alert.alert('로그인 성공!', response.data.resMessage, [
          {
            text: 'OK',
            onPress: () => {
              navigation.navigate('MainNavigator', { userId });
            }
          }
        ]);
      } else {
        if (response.data.statusCode === 404 && response.data.resMessage === "해당하는 email의 password가 일치하지 않습니다.") {
          Alert.alert('로그인 실패', response.data.resMessage);
        } else {
          Alert.alert('로그인 실패', '이메일 또는 비밀번호가 잘못되었습니다.');
        }
      }
    } catch (error) {
      if (error.response && error.response.data) {
        const { success, statusCode, resMessage } = error.response.data;
        if (!success) {
          // 백엔드에서 보내온 예외처리 응답값 확인
          if (statusCode === 404 && resMessage === '해당하는 email의 사용자를 찾을 수 없습니다.') {
            Alert.alert('로그인 실패', '이메일이 잘못되었습니다.');
          } else if (statusCode === 404 && resMessage === '해당하는 email의 password가 일치하지 않습니다.') {
            Alert.alert('로그인 실패', '비밀번호가 잘못되었습니다.');
          } else {
            Alert.alert('에러', resMessage);
          }
        }
      } else {
        Alert.alert('에러', '로그인 중 오류가 발생했습니다.');
      }
    }
  }; 
  
  // 사용자 데이터 저장 함수
  const saveUserData = (userId) => {
    // 사용자 userId를 로컬 스토리지 또는 AsyncStorage에 저장하는 로직 추가
    AsyncStorage.setItem('userId', userId.toString());
  };

  return (

    <SafeAreaView style={styles.container}>
          <LinearGradient
              style={{
                  flex: 1
              }}
              colors={[COLORS.white, COLORS.white]}
          >
        <View style={styles.contentContainer}>
          <View style={[styles.titleContainer, { flexDirection: 'row', alignItems: 'center' }]}>
            <Image
              source={require('../../assets/images/chicky/chick.png')}
              style={[styles.titleImage, { marginRight: 10 }]}/>
            <Text style={styles.title}>Chicky</Text>
          </View>
          <View style={styles.inputContainer}>
            <EmailInput onChangeText={setEmail} value={email} />
            <PasswordInput onChangeText={setPassword} value={password} />
            <Button
              title="로그인"
              onPress={handleLogin}
              filled
              style={styles.loginButton}
            />
          </View>
          <View style={styles.signupContainer}>
            <Text style={styles.signupText}>계정이 없으신가요?</Text>
            <Pressable onPress={() => navigation.navigate("MainNavigator")}>
              <Text style={styles.signupLink}>회원가입</Text>
            </Pressable>
          </View>
        </View>
      </LinearGradient>  
    </SafeAreaView>

  );
};

export default LoginScreen;
