import React, { useRef } from 'react';
import { View, Image, TouchableOpacity, StyleSheet, Animated, Easing, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();
  const bounceAnimation = useRef(new Animated.Value(0)).current;

  const startCamera = () => {
    fetch('http://192.168.0.236:5000/camera', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        command: '1', // '1'은 카메라 시작, '0'은 카메라 정지
      }),
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  };

  const stopCamera = () => {
    fetch('http://192.168.0.236:5000/camera', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        command: '0', // '1'은 카메라 시작, '0'은 카메라 정지
      }),
    })
    .then((response) => response.json())
    .then((json) => console.log(json))
    .catch((error) => console.error(error));
  };

  Animated.loop(
    Animated.sequence([
      Animated.timing(bounceAnimation, {
        toValue: 15,
        duration: 600,
        easing: Easing.elastic(1.5),
        useNativeDriver: true,
      }),
      Animated.timing(bounceAnimation, {
        toValue: 0,
        duration: 600,
        easing: Easing.elastic(1.5),
        useNativeDriver: true,
      }),
    ])
  ).start();

  const handleChickPress = () => {
    startCamera(); 
    navigation.navigate('Video');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={stopCamera} style={styles.stopButton}>
        <Image
          style={styles.offButton}
          source={require('../../assets/images/button/videoOff.png')}
        />
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleChickPress} style={styles.pressableArea}>
        <Animated.Image
          source={require('../../assets/images/chicky/chick (5).png')}
          style={[
            styles.image,
            {
              transform: [{ translateY: bounceAnimation }],
            },
          ]}
        />
      <View style={styles.bubble}>
        <Text style={styles.bubbleText}>아이의 모습이 궁금하다면 나를 눌러봐!</Text>
        <View style={styles.bubbleTail} />
      </View>
      </TouchableOpacity>
      {/* <Text style={styles.infoText}>Chicky Cam</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF7E0',
  },
  pressableArea: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column', // 이미지를 위로, bubble을 아래로
  },  
  image: {
    width: 320,
    height: 320,
    resizeMode: 'contain',
    marginTop: 20,
  },
  bubble: {
    position: 'absolute',
    backgroundColor: '#FFD580',
    padding: 15,
    borderRadius: 20,
    bottom: 280, // 위치 조정, 이미지 위로
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bubbleText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontFamily: '온글잎 류뚱체',
  },
  bubbleTail: {
    position: 'absolute',
    left: '40%', // 말풍선 중앙에 위치시킵니다.
    bottom: -13, // 말풍선 아래쪽으로 위치시킵니다.
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 10, // 꼬리의 크기를 조절할 수 있습니다.
    borderRightWidth: 10, // 꼬리의 크기를 조절할 수 있습니다.
    borderBottomWidth: 15, // 꼬리의 높이를 조절할 수 있습니다.
    borderLeftColor: 'transparent', // 왼쪽 색을 투명하게 합니다.
    borderRightColor: 'transparent', // 오른쪽 색을 투명하게 합니다.
    borderBottomColor: '#FFD580', // 꼬리의 색을 말풍선과 동일하게 합니다.
    transform: [{ translateX: -10 }, { rotate: '180deg' }], // 꼬리의 위치를 조정할 수 있습니다.
  },
  infoText: {
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -45,
  },
  offButton: {
    width: 5,
    height: 5,
  },
  stopButton: {
    position: 'absolute', // 절대 위치 사용
    right: 20, // 오른쪽 상단으로
    top: 20, // 상단으로 조정
    elevation: 100,
  },
});

export default HomeScreen;
