// import React, { useState } from 'react';
// import { View, Image, StyleSheet, Text, TouchableOpacity } from 'react-native';

// const ProfileScreen = ({navigation}) => {
//   const [isEditing, setIsEditing] = useState(false);

//   const handleEditProfile = () => {
//     if (isEditing) {
//       // 프로필 수정 완료 로직 추가
//     } else {
//       navigation.navigate('ProfileEdit');
//     }
//     setIsEditing(!isEditing);
//   };
  
//   const handleLogout = () => {
//     // 로그아웃 로직 추가
//   };

//   return (
//     <View style={styles.container}>
//       <View style={styles.profileImageContainer}>
//         <Image
//           source={require('../../assets/images/chicky/reactrabbit.png')}
//           style={styles.profileImage}
//         />
//       </View>
//       <Text style={styles.username}>김은지</Text>
//       <TouchableOpacity onPress={handleEditProfile}>
//         <Text style={[styles.editText, isEditing && styles.editingText]}>
//           {isEditing ? '프로필 수정 완료' : '프로필 수정'}
//         </Text>
//       </TouchableOpacity>
//       <TouchableOpacity onPress={handleLogout}>
//         <Text style={styles.logoutText}>로그아웃</Text>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingTop: 50,
//     backgroundColor: '#FFF7E0',
//   },
//   profileImageContainer: {
//     width: 140,
//     height: 140,
//     borderRadius: 75,
//     overflow: 'hidden',
//     marginTop: 20,
//   },
//   profileImage: {
//     width: '100%',
//     height: '100%',
//   },
//   username: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginTop: 20,
//   },
//   editText: {
//     fontSize: 16,
//     color: '#007AFF',
//     marginTop: 20,
//   },
//   editingText: {
//     color: '#FF3B30',
//   },
//   logoutText: {
//     fontSize: 16,
//     color: '#FF3B30',
//     marginTop: 20,
//   },
// });

// export default ProfileScreen;



import React, { useState } from 'react';
import { View, Image, StyleSheet, Text, TouchableOpacity, Alert } from 'react-native';
import axios from 'axios';

const ProfileScreen = ({ navigation }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditProfile = async () => {
    if (isEditing) {
      try {
        // 프로필 수정 완료 로직 (Axios 통신)
        await axios.put('/api/profile', { /* 수정된 프로필 데이터 */ });
        Alert.alert('프로필 수정이 완료되었습니다.');
      } catch (error) {
        Alert.alert('프로필 수정에 실패했습니다.');
      }
    } else {
      navigation.navigate('ProfileEdit');
    }
    setIsEditing(!isEditing);
  };

  const handleLogout = async () => {
    try {
      // 로그아웃 로직 (Axios 통신)
      await axios.post('/api/logout');
      // 로그아웃 성공 시 처리
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('로그아웃에 실패했습니다.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profileImageContainer}>
        <Image
          source={require('../../assets/images/chicky/reactrabbit.png')}
          style={styles.profileImage}
        />
      </View>
      <Text style={styles.username}>김은지</Text>
      <TouchableOpacity onPress={handleEditProfile}>
        <Text style={[styles.editText, isEditing && styles.editingText]}>
          {isEditing ? '프로필 수정 완료' : '프로필 수정'}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleLogout}>
        <Text style={styles.logoutText}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
    backgroundColor: '#FFF7E0',
  },
  profileImageContainer: {
    width: 140,
    height: 140,
    borderRadius: 70,
    overflow: 'hidden',
    marginTop: 20,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  profileImage: {
    width: '100%',
    height: '100%',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 20,
  },
  editText: {
    fontSize: 16,
    color: '#007AFF',
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#007AFF',
    borderRadius: 8,
  },
  editingText: {
    color: '#FF3B30',
    borderColor: '#FF3B30',
  },
  logoutText: {
    fontSize: 16,
    color: '#FF3B30',
    marginTop: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#FF3B30',
    borderRadius: 8,
  },
});

export default ProfileScreen;