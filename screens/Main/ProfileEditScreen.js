import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import axios from 'axios';

const ProfileEditScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [childName, setChildName] = useState('');
  const [childGender, setChildGender] = useState('');
  const [childAge, setChildAge] = useState('');
  const [likes, setLikes] = useState('');
  const [dislikes, setDislikes] = useState('');

  const handleSaveProfile = async () => {
    try {
      await axios.put('/api/profile', {
        username,
        childName,
        childGender,
        childAge,
        likes,
        dislikes,
      });
      navigation.navigate('Profile');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        value={childName}
        onChangeText={setChildName}
        placeholder="Child's Name"
      />
      <Picker
        style={styles.picker}
        selectedValue={childGender}
        onValueChange={(value) => setChildGender(value)}
      >
        <Picker.Item label="Select Gender" value="" />
        <Picker.Item label="Male" value="male" />
        <Picker.Item label="Female" value="female" />
      </Picker>
      <TextInput
        style={styles.input}
        value={childAge}
        onChangeText={setChildAge}
        placeholder="Child's Age"
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        value={likes}
        onChangeText={setLikes}
        placeholder="Child's Likes"
      />
      <TextInput
        style={styles.input}
        value={dislikes}
        onChangeText={setDislikes}
        placeholder="Child's Dislikes"
      />
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveProfile}>
        <Text style={styles.saveButtonText}>완료</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f2f2f2',
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  picker: {
    width: '100%',
    height: 50,
    marginBottom: 20,
    backgroundColor: '#fff',
  },
  saveButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
  },
  saveButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ProfileEditScreen;
