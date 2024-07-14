import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';

const ChatRoomListScreen = ({ navigation }) => {

  const startServer = async () => {
    try {
      const response = await fetch('http://192.168.0.236:5001/start_server', { method: 'GET' });
      const responseText = await response.text();
      // Alert.alert('서버 시작 성공', responseText);
    } catch (error) {
      // Alert.alert('오류', '서버를 시작하지 못했습니다. ' + error.message);
    }
  };

  const handleInterAvartartChatRoom = () => {
    startServer();
    navigation.navigate('AvatarChatScreen');
  };

  const handleInterGptChatRoom = () => {
    navigation.navigate('GptChatScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
      </View>
      <TouchableOpacity onPress={handleInterAvartartChatRoom} style={styles.chatRoomItem}>
        <Image source={require('../../assets/images/chicky/chick (5).png')} style={styles.icon} />
        <Text style={styles.chatRoomText}>아바타톡</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleInterGptChatRoom} style={styles.chatRoomItem}>
        <Image source={require('../../assets/images/chicky/chick (5).png')} style={styles.icon} />
        <Text style={styles.chatRoomText}>GPT챗봇</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF7E0', // 병아리 느낌의 배경색
  },
  header: {
    paddingTop: 0,
    paddingBottom: 20,
    marginBottom: 20,
    // backgroundColor: '#FFD580', // 헤더의 주황색 배경
    alignItems: 'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#805500', // 갈색 텍스트로 병아리 테마 강화
  },
  chatRoomItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFE4B5', // 아이템 배경색
    padding: 20,
    margin: 15,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  chatRoomText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#805500', // 텍스트 색상
    marginLeft: 10,
    fontFamily: '온글잎 류뚱체',
  },
  icon: {
    width: 50,
    height: 50,
  },
});

export default ChatRoomListScreen;
