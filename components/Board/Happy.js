import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Happy = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>자주묻는질문</Text>
            <Text style={styles.emotionName}>기쁨</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF7E0',
      paddingHorizontal: 16,
      paddingVertical: 10,
    },
    title: {
        marginTop: 50,
        textAlign: 'center',
        fontSize: 40,
    },
    emotionName: {

    }
  });

export default Happy;