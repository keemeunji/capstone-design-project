import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import axios from 'axios';

const API_URL = 'http://192.168.0.235:8080';

const GptChatScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const scrollViewRef = useRef();

  useEffect(() => {
    handleRefresh();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleRefresh = () => {
    axios.get(`${API_URL}/chat/gpt`)
      .then((response) => {
        const formattedMessages = response.data.data.chats.map((message) => ({
          sender: message.sender,
          contents: message.contents,
          createdAt: new Date(message.timestamp),
          user: {
            _id: message.sender === '아이' ? 1 : 2,
          },
        }));

        const sortedMessages = formattedMessages.sort((a, b) => a.createdAt - b.createdAt);
        setMessages(sortedMessages);
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  const handleBack = () => {
    navigation.goBack();
  }

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({ animated: true });
    }
  };

  const formatTimestamp = (timestamp) => {
    const date = new Date(timestamp);
    const dateString = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
    const timeString = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    return { dateString, timeString };
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>GPT챗봇</Text>
      </View>
  
      <TouchableOpacity onPress={handleRefresh} style={styles.refreshButtonContainer}>
        <Image source={require('../../assets/images/button/refresh.png')} style={styles.refreshButton} />
      </TouchableOpacity>
      <TouchableOpacity 
          onPress={handleBack} style={styles.backButtonContainer}>
            <Image source={require('../../assets/images/button/arrow.png')} style={styles.backButton} />
        </TouchableOpacity>  
  
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={scrollToBottom}
        contentContainerStyle={styles.messageContainer}
      >
        {messages.map((message, index) => {
          const { dateString, timeString } = formatTimestamp(message.createdAt);
          return (
            <View key={index}>
              {index === 0 || message.createdAt.getDate() !== messages[index - 1].createdAt.getDate() ? (
                <View style={styles.dateContainer}>
                  <Text style={styles.dateText}>{dateString}</Text>
                </View>
              ) : null}
              <View
                style={[
                  styles.messageBubble,
                  message.sender === 'GPT' ? styles.leftBubble : styles.rightBubble,
                ]}
              >
                <Text style={[styles.messageText, message.sender === 'GPT' ? {} : { color: '#f0f0f0' }]}>
                  {message.contents}
                </Text>
                <Text style={[styles.timeText, message.sender === 'GPT' ? {} : { color: '#fff' }]}>
                  {timeString}
                </Text>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 20,
  },
  refreshButtonContainer: {
    alignSelf: 'flex-end',
    marginBottom: 50,
    marginTop: -53,
    marginRight: 10,
  },
  refreshButton: {
    width: 30,
    height: 30,
  },
  backButtonContainer: {
    alignSelf: 'flex-start',
    marginBottom: 50,
    marginTop: -75,
    marginLeft: 10,
  },
  backButton: {
    width: 30,
    height: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  messageBubble: {
    maxWidth: '100%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 10,
    alignSelf: 'flex-start',
    marginHorizontal: 10,
  },
  leftBubble: {
    backgroundColor: '#FFE5B4',
    marginRight: 'auto',
  },
  rightBubble: {
    backgroundColor: '#FFA048',
    marginLeft: 'auto',
    color: '#fff',
  },
  messageText: {
    fontSize: 16,
  },
  timeText: {
    fontSize: 12,
    marginLeft: 8,
  },
  dateContainer: {
    alignItems: 'center',
    marginVertical:-0,
  },
  dateText: {
    // backgroundColor: '#f0f0f0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 14,
    color: '#000',
  },
});

export default GptChatScreen;

