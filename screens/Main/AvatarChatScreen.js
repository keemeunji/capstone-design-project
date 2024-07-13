import React, { useState, useEffect, useRef } from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const API_URL = 'http://192.168.0.235:8080';

const AvatarChatScreen = ({navigation}) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const scrollViewRef = useRef();

  useEffect(() => {
    handleRefresh();
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (newMessage.trim() !== '') {
      try {
        const timestamp = new Date().toISOString();
        const messageData = {
          contents: newMessage,
          timestamp: timestamp,
        };

        await axios.post(`${API_URL}/chat`, messageData);
        setNewMessage('');
        handleRefresh();
        console.log('message post succcess');
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  const handleRefresh = () => {
    axios.get(`${API_URL}/chat/avatar`)
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
        console.log('message send a succcess');
      })
      .catch((error) => {
        console.error('Error', error);
      });
  };

  const stopServer = () => {
    fetch('http://192.168.0.236:5001/stop_server', {
      method: 'GET',
    })
    .then(response => response.text())
    .then(responseText => {
      console.log('Success', responseText);
    })
    .catch(error => {
      console.log('Error', 'Failed to stop the server. ' + error.message);2
    });
  };

  const handleStopServer = () => {
    stopServer();
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
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
      keyboardVerticalOffset={0}
    >
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>아바타톡</Text>
        </View>
        <TouchableOpacity onPress={handleRefresh} style={styles.refreshButtonContainer}>
          <Image source={require('../../assets/images/button/refresh.png')} style={styles.refreshButton} />
        </TouchableOpacity>
        <TouchableOpacity 
          onPress={handleStopServer} style={styles.backButtonContainer}>
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
                      message.sender === '아이' ? styles.leftBubble : styles.rightBubble,
                    ]}
                  >
                    <Text style={[styles.messageText, message.sender === '아이' ? {} : { color: '#f0f0f0' }]}>
                      {message.contents}
                    </Text>
                    <Text style={[styles.timeText, message.sender === '아이' ? {} : { color: '#fff' }]}>
                      {timeString}
                    </Text>
                  </View>
                </View>
              );
            })}
          </ScrollView>
        </View>
        <SafeAreaView>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              value={newMessage}
              onChangeText={setNewMessage}
              placeholder="메시지 입력..."
            />
            <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
              <Image source={require('../../assets/images/button/send.png')} style={styles.sendButtonImage} />
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    </KeyboardAvoidingView>
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
  refreshButtonContainer: {
    alignSelf: 'flex-end',
    marginBottom: 50,
    marginTop: -50,
    marginRight: 10,
  },
  refreshButton: {
    width: 30,
    height: 30,
  },
  messageBubble: {
    maxWidth: '40%',
    padding: 12,
    borderRadius: 16,
    marginVertical: 8,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftBubble: {
    backgroundColor: '#FFE5B4',
    // marginRight: 'auto',
    marginLeft: 13,
  },
  rightBubble: {
    backgroundColor: '#FFA048',
    marginLeft: 'auto',
    marginRight: 5,
  },
  messageText: {
    fontSize: 16,
    flex: 1,
  },
  timeText: {
    fontSize: 12,
    marginLeft: 8,
  },
  dateContainer: {
    alignItems: 'center',
    marginVertical: 12,
  },
  dateText: {
    // backgroundColor: '#f0f0f0',
    paddingVertical: 4,
    paddingHorizontal: 8,
    borderRadius: 10,
    fontSize: 14,
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 16,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  sendButtonImage: {
    width: 30,
    height: 32,
    marginLeft: 8,
    marginBottom: 6,
  },
});

export default AvatarChatScreen;




// import React, { useState, useEffect, useRef } from 'react';
// import { View, StyleSheet, Text, Image, TouchableOpacity, ScrollView, TextInput, KeyboardAvoidingView, Platform, SafeAreaView, Alert } from 'react-native';
// import axios from 'axios';
// import { useNavigation } from '@react-navigation/native';

// const API_URL = 'http://192.168.0.235:8080';

// const AvatarChatScreen = ({navigation}) => {
//   const [messages, setMessages] = useState([]);
//   const [newMessage, setNewMessage] = useState('');
//   const scrollViewRef = useRef();

//   useEffect(() => {
//     handleRefresh();
//   }, []);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const handleSendMessage = async () => {
//     if (newMessage.trim() !== '') {
//       try {
//         const timestamp = new Date().toISOString();
//         const messageData = {
//           contents: newMessage,
//           timestamp: timestamp,
//         };

//         await axios.post(`${API_URL}/chat`, messageData);
//         setNewMessage('');
//         handleRefresh();
//         console.log('message post succcess');
//       } catch (error) {
//         console.error('Error sending message:', error);
//       }
//     }
//   };

//   const handleRefresh = () => {
//     axios.get(`${API_URL}/chat/avatar`)
//       .then((response) => {
//         const filteredMessages = response.data.data.chats.filter((message) => message.sender === '0' || message.sender === '1');

//         const formattedMessages = filteredMessages.map((message) => ({
//           sender: message.sender,
//           contents: message.contents,
//           createdAt: new Date(message.timestamp),
//           user: {
//             _id: message.sender === '아이' ? 1 : 2,
//           },
//         }));

//         const sortedMessages = formattedMessages.sort((a, b) => a.createdAt - b.createdAt);
//         setMessages(sortedMessages);
//         console.log('message send a succcess');
//       })
//       .catch((error) => {
//         console.error('Error', error);
//       });
//   };

//   const stopServer = () => {
//     fetch('http://192.168.0.236:5001/stop_server', {
//       method: 'GET',
//     })
//     .then(response => response.text())
//     .then(responseText => {
//       console.log('Success', responseText);
//     })
//     .catch(error => {
//       console.log('Error', 'Failed to stop the server. ' + error.message);2
//     });
//   };

//   const handleStopServer = () => {
//     stopServer();
//     navigation.goBack();
//   }

//   const scrollToBottom = () => {
//     if (scrollViewRef.current) {
//       scrollViewRef.current.scrollToEnd({ animated: true });
//     }
//   };

//   const formatTimestamp = (timestamp) => {
//     const date = new Date(timestamp);
//     const dateString = `${date.getFullYear()}.${(date.getMonth() + 1).toString().padStart(2, '0')}.${date.getDate().toString().padStart(2, '0')}`;
//     const timeString = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
//     return { dateString, timeString };
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
//       style={styles.container}
//       keyboardVerticalOffset={0}
//     >
//       <View style={styles.container}>
//         <View style={styles.titleContainer}>
//           <Text style={styles.title}>아바타톡</Text>
//         </View>
//         <TouchableOpacity onPress={handleRefresh} style={styles.refreshButtonContainer}>
//           <Image source={require('../../assets/images/button/refresh.png')} style={styles.refreshButton} />
//         </TouchableOpacity>
//         <TouchableOpacity 
//           onPress={handleStopServer} style={styles.backButtonContainer}>
//             <Image source={require('../../assets/images/button/arrow.png')} style={styles.backButton} />
//         </TouchableOpacity>  
//           <ScrollView
//             ref={scrollViewRef}
//             onContentSizeChange={scrollToBottom}
//             contentContainerStyle={styles.messageContainer}
//           >
//             {messages.map((message, index) => {
//               const { dateString, timeString } = formatTimestamp(message.createdAt);
//               return (
//                 <View key={index}>
//                   {index === 0 || message.createdAt.getDate() !== messages[index - 1].createdAt.getDate() ? (
//                     <View style={styles.dateContainer}>
//                       <Text style={styles.dateText}>{dateString}</Text>
//                     </View>
//                   ) : null}
//                   <View
//                     style={[
//                       styles.messageBubble,
//                       message.sender === '아이' ? styles.leftBubble : styles.rightBubble,
//                     ]}
//                   >
//                     <Text style={[styles.messageText, message.sender === '아이' ? {} : { color: '#f0f0f0' }]}>
//                       {message.contents}
//                     </Text>
//                     <Text style={[styles.timeText, message.sender === '아이' ? {} : { color: '#fff' }]}>
//                       {timeString}
//                     </Text>
//                   </View>
//                 </View>
//               );
//             })}
//           </ScrollView>
//         </View>
//         <SafeAreaView>
//           <View style={styles.inputContainer}>
//             <TextInput
//               style={styles.input}
//               value={newMessage}
//               onChangeText={setNewMessage}
//               placeholder="메시지 입력..."
//             />
//             <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
//               <Image source={require('../../assets/images/button/send.png')} style={styles.sendButtonImage} />
//             </TouchableOpacity>
//           </View>
//         </SafeAreaView>
//     </KeyboardAvoidingView>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginTop: 80,
//     marginBottom: 20,
//   },
//   backButtonContainer: {
//     alignSelf: 'flex-start',
//     marginBottom: 50,
//     marginTop: -75,
//     marginLeft: 10,
//   },
//   backButton: {
//     width: 30,
//     height: 30,
//   },
//   title: {
//     fontSize: 30,
//     fontWeight: 'bold',
//   },
//   refreshButtonContainer: {
//     alignSelf: 'flex-end',
//     marginBottom: 50,
//     marginTop: -50,
//     marginRight: 10,
//   },
//   refreshButton: {
//     width: 30,
//     height: 30,
//   },
//   messageBubble: {
//     maxWidth: '40%',
//     padding: 12,
//     borderRadius: 16,
//     marginVertical: 8,
//     alignSelf: 'flex-start',
//     flexDirection: 'row',
//     alignItems: 'center',
//   },
//   leftBubble: {
//     backgroundColor: '#FFE5B4',
//     // marginRight: 'auto',
//     marginLeft: 13,
//   },
//   rightBubble: {
//     backgroundColor: '#FFA048',
//     marginLeft: 'auto',
//     marginRight: 5,
//   },
//   messageText: {
//     fontSize: 16,
//     flex: 1,
//   },
//   timeText: {
//     fontSize: 12,
//     marginLeft: 8,
//   },
//   dateContainer: {
//     alignItems: 'center',
//     marginVertical: 12,
//   },
//   dateText: {
//     // backgroundColor: '#f0f0f0',
//     paddingVertical: 4,
//     paddingHorizontal: 8,
//     borderRadius: 10,
//     fontSize: 14,
//     color: '#000',
//   },
//   inputContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: 16,
//     paddingVertical: 10,
//     backgroundColor: '#fff',
//   },
//   input: {
//     flex: 1,
//     height: 40,
//     borderWidth: 1,
//     borderColor: '#ccc',
//     borderRadius: 20,
//     paddingHorizontal: 16,
//     fontSize: 16,
//     backgroundColor: '#fff',
//   },
//   sendButtonImage: {
//     width: 30,
//     height: 32,
//     marginLeft: 8,
//     marginBottom: 6,
//   },
// });

// export default AvatarChatScreen;