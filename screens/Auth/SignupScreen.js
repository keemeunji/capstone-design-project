import React, { useState, useCallback } from 'react';
import { View, Text, SafeAreaView, Alert, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { styles } from '../../styles/stringInputStyles';
import Button from '../../components/Button';
import COLORS from '../../constants/colors';
import axios from 'axios';

import NameInput from '../../components/NameInput';
import EmailInput from '../../components/EmailInput';
import PasswordInput from '../../components/PasswordInput';
import PasswordConfirmationInput from '../../components/PasswordConfirmationInput';
import PhoneNumberInput from '../../components/PhoneNumberInput';
import ChildNameInput from '../../components/ChildNameInput';
import ChildGenderInput from '../../components/ChildGenderInput';
import ChildLikesInput from '../../components/ChildLikesInput';
import ChildDislikesInput from '../../components/ChildDislikesInput';

const API_URL = 'http://192.168.0.235:8080';

const SignupScreen = ({ navigation }) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // 이름, 이메일, 비밀번호, 비밀번호 확인, 전화번호
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [childName, setChildName] = useState('');
    const [childGender, setChildGender] = useState('');
    const [childLikes, setChildLikes] = useState('');
    const [childDislikes, setChildDislikes] = useState('');

    // 오류 메세지 상태 저장
    const [nameMessage, setNameMessage] = useState('');
    const [emailMessage, setEmailMessage] = useState('');
    const [passwordMessage, setPasswordMessage] = useState('');
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState('');
    const [phoneNumberMessage, setPhoneNumberMessage] = useState('');
    const [childNameMessage, setChildNameMessage] = useState('');
    const [childGenderMessage, setChildGenderMessage] = useState('');
    const [childLikesMessage, setChildLikesMessage] = useState('');
    const [childDislikesMessage, setChildDislikesMessage] = useState('');


    // 유효성 검사
    const [isName, setIsName] = useState(false)
    const [isEmail, setIsEmail] = useState(false)
    const [isPassword, setIsPassword] = useState(false)
    const [isPasswordConfirm, setIsPasswordConfirm] = useState(false)
    const [isPhoneNumber, setIsPhoneNumber] = useState(false);
    const [isChildName, setIsChildName] = useState(false);
    const [isChildGender, setIsChildGender] = useState(false);
    const [isChildLikes, setIsChildLikes] = useState(false);
    const [isChildDislikes, setIsChildDislikes] = useState(false);

    const handleNameChange = useCallback((text) => {
        // 숫자 입력 여부 검사
        if (/\d/.test(text)) {
          setNameMessage('이름에 숫자는 입력할 수 없습니다.');
          setIsName(false);
          return;
        }
      
        // 이름 길이 검사
        setName(text);
        if (text.length < 2 || text.length > 20) {
          setNameMessage('이름은 2자 이상 20자 이하로 입력해주세요.');
          setIsName(false);
        } else {
          setNameMessage('올바른 이름 형식입니다 :)');
          setIsName(true);
        }
      }, []);
      

    // 이메일 유효성 검사
    const handleEmailChange = useCallback((text) => {
        setEmail(text);
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(text)) {
            setEmailMessage('이메일 형식이 올바르지 않습니다.');
            setIsEmail(false);
        } else {
            setEmailMessage('올바른 이메일 형식입니다 :)');
            setIsEmail(true);
        }
    }, []);

    // 비밀번호 유효성 검사
    const handlePasswordChange = useCallback((text) => {
        setPassword(text);
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(text)) {
            setPasswordMessage('비밀번호는 최소 8자, 숫자, 문자, 특수문자를 포함해야 합니다.');
            setIsPassword(false);
        } else {
            setPasswordMessage('안전한 비밀번호에요 :)');
            setIsPassword(true);
        }
    }, []);

    // 비밀번호 일치 확인 유효성 검사
    const handlePasswordConfirmChange = useCallback((text) => {
        setPasswordConfirm(text);
        if (text !== password) {
            setPasswordConfirmMessage('비밀번호가 일치하지 않습니다.');
            setIsPasswordConfirm(false);
        } else {
            setPasswordConfirmMessage('비밀번호를 똑같이 입력했어요 :)');
            setIsPasswordConfirm(true);
        }
    }, [password]);

    // 전화번호 유효성 검사
    const handlePhoneNumberChange = useCallback((text) => {
        setPhoneNumber(text);
        const phoneNumberRegex = /^[0-9]{10,11}$/;
        if (!phoneNumberRegex.test(text)) {
            setPhoneNumberMessage('전화번호 형식이 올바르지 않습니다.');
            setIsPhoneNumber(false);
        } else {
            setPhoneNumberMessage('전화번호 형식을 올바르게 입력했어요 :)');
            setIsPhoneNumber(true);
        }
    }, []);

    // 아이의 이름 유효성 검사
    const handleChildNameChange = useCallback((text) => {
        // 숫자 입력 여부 검사
        if (/\d/.test(text)) {
          setChildNameMessage('이름에 숫자는 입력할 수 없습니다.');
          setIsChildName(false);
          return;
        }
      
        // 이름 길이 검사
        setChildName(text);
        if (text.length < 2 || text.length > 20) {
          setChildNameMessage('이름은 2자 이상 20자 이하로 입력해주세요.');
          setIsChildName(false);
        } else {
          setNameMessage('올바른 이름 형식입니다 :)');
          setIsChildName(true);
        }
      }, []);


      // 아이의 성별 유효성 검사
      const handleChildGenderChange = useCallback((text) => {
        // 숫자 입력 여부 검사
        if (/\d/.test(text)) {
          setChildGenderMessage('');
          setIsChildGender(false);
          return;
        }
      
        // 이름 길이 검사
        setChildGender(text);
        if (text.length > 2) {
          setChildGenderMessage('두 글자 이하로 입력하세요.');
          setIsChildGender(false);
        } else {
          setChildGenderMessage('');
          setIsChildGender(true);
        }
      }, []);



    // 아이가 좋아하는 것 유효성 검사
    const handleChildLikesChange = useCallback((text) => {
        // 숫자 입력 여부 검사
        if (/\d/.test(text)) {
          setChildLikesMessage('이름에 숫자는 입력할 수 없습니다.');
          setIsChildLikes(false);
          return;
        }
      
        // 길이 검사
        setChildLikes(text);
        if (text.length < 2 || text.length > 20) {
          setChildLikesMessage('1자 이상 20자 이하로 입력해주세요.');
          setIsChildLikes(false);
        } else {
          setChildLikesMessage('');
          setIsChildLikes(true);
        }
      }, []);


    // 아이가 싫어하는 것 유효성 검사
      const handleChildDislikesChange = useCallback((text) => {
        // 숫자 입력 여부 검사
        if (/\d/.test(text)) {
          setChildDislikesMessage('이름에 숫자는 입력할 수 없습니다.');
          setIsChildDislikes(false);
          return;
        }
      
        // 길이 검사
        setChildDislikes(text);
        if (text.length < 2 || text.length > 20) {
          setChildDislikesMessage('1자 이상 20자 이하로 입력해주세요.');
          setIsChildDislikes(false);
        } else {
          setChildDislikesMessage('');
          setIsChildDislikes(true);
        }
      }, []);

    const handleRegister = async () => {
        if (isName && isEmail && isPassword && isPasswordConfirm && isPhoneNumber) {
          const userData = {
            name: name,
            email: email,
            password: password,
            phoneNumber: phoneNumber,
            childName: childName,
            childGender: childGender,
            childLikes: childLikes,
            childDislikes: childDislikes,
          };
      
          try {
            const response = await axios.post(`${API_URL}/member/signup`, userData);
            if (response.data.success) {
              Alert.alert('회원가입이 완료되었습니다!', response.data.resMessage, [
                {
                  text: 'OK',
                  onPress: () => {
                    navigation.navigate('Welcome');
                  },
                },
              ]);
            } else {
              // 백엔드에서 받은 에러 메시지 처리
              switch (response.data.statusCode) {
                case 404:
                  Alert.alert('오류 발생', response.data.resMessage);
                  break;
                default:
                  Alert.alert('', '회원가입 성공했습니다.');
                  break;
              }
            }
          } catch (error) {
            if (error.response) {
              // 서버에서 보낸 오류 메시지 처리
              switch (error.response.status) {
                case 400:
                  // 잘못된 입력 처리
                  Alert.alert('오류 발생', '입력 정보를 확인해주세요.');
                  break;
                case 404:
                  // 중복된 이메일 처리
                  Alert.alert('이미 가입된 이메일입니다.', '');
                  break;
                case 500:
                  // 서버 오류 처리
                  Alert.alert('오류 발생', '서버 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
                  break;
                default:
                  // 기타 오류 처리
                  Alert.alert('오류 발생', '회원가입 중 오류가 발생했습니다.');
                  break;
              }
            } else {
              // 요청이 전혀 가지 않았을 때
              Alert.alert('네트워크 오류', '요청이 전송되지 않았습니다. 네트워크 연결을 확인해주세요.');
            }
          }
        } else {
          Alert.alert('', '모든 입력 항목을 올바르게 입력해주세요.');
        }
      };
      

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white, }}>
            <ScrollView>
                <KeyboardAwareScrollView>
                    <View style={{ flex: 1, marginHorizontal: 22, }}>
                        <View style={{ marginVertical: 22, alignItems: 'center', }}>
                            <Text style={{
                                fontSize: 45,
                                fontWeight: 'bold',
                                marginVertical: 12,
                                alignItems: 'center',
                                color: COLORS.orange
                            }}>
                                회원가입
                            </Text>
                        </View>
                            <NameInput
                                value={name}
                                onChangeText={handleNameChange}
                            />
                            {name.length > 0 && (
                                <Text style={[styles.message, isName ? styles.successMessage : styles.errorMessage]}>
                                    {nameMessage}
                                </Text>
                            )}
                            <EmailInput
                                value={email}
                                onChangeText={handleEmailChange}
                            />
                            {email.length > 0 && (
                                <Text style={[styles.message, isEmail ? styles.successMessage : styles.errorMessage]}>
                                    {emailMessage}
                                </Text>
                            )}
                            <PasswordInput
                                value={password}
                                onChangeText={handlePasswordChange}
                            />
                            {password.length > 0 && (
                                <Text style={[styles.message, isPassword ? styles.successMessage : styles.errorMessage]}>
                                    {passwordMessage}
                                </Text>
                            )}
                            <PasswordConfirmationInput
                                value={passwordConfirm}
                                onChangeText={handlePasswordConfirmChange}
                            />
                            {passwordConfirm.length > 0 && (
                                <Text style={[styles.message, isPasswordConfirm ? styles.successMessage : styles.errorMessage]}>
                                    {passwordConfirmMessage}
                                </Text>
                            )}
                            <PhoneNumberInput                 
                                value={phoneNumber}
                                onChangeText={handlePhoneNumberChange}
                            />
                            {phoneNumber.length > 0 && (
                                <Text style={[styles.message, isPhoneNumber ? styles.successMessage : styles.errorMessage]}>
                                    {phoneNumberMessage}
                                </Text>
                            )}
                            <ChildNameInput
                                value={childName}
                                onChangeText={handleChildNameChange}                            
                            />
                             {childName.length > 0 && (
                                <Text style={[styles.message, isChildName ? styles.successMessage : styles.errorMessage]}>
                                    {childNameMessage}
                                </Text>
                            )}                           
                            <ChildGenderInput 
                            value={childGender}
                            onValueChange={(newGender) => setChildGender(newGender)}
                            />
                            <ChildLikesInput 
                                value={childLikes}
                                onChangeText={handleChildLikesChange}                            
                            />
                             {childLikes.length > 0 && (
                                <Text style={[styles.message, isChildLikes ? styles.successMessage : styles.errorMessage]}>
                                    {childLikesMessage}
                                </Text>
                            )}                                
                            <ChildDislikesInput 
                                value={childDislikes}
                                onChangeText={handleChildDislikesChange}                           
                            />
                             {childDislikes.length > 0 && (
                                <Text style={[styles.message, isChildDislikes ? styles.successMessage : styles.errorMessage]}>
                                    {childDislikesMessage}
                                </Text>
                            )}                                
                            <Button
                                title="회원가입"
                                onPress={handleRegister}
                                disabled={!(isName && isEmail && isPassword && isPasswordConfirm && isPhoneNumber)}
                            />
                        </View>
                    </KeyboardAwareScrollView>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignupScreen;
