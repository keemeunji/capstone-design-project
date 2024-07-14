import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import Collapsible from 'react-native-collapsible';

const BoardScreen = () => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleExpanded = () => {
        setCollapsed(!collapsed);
    };

    const handleImagePress = () => {
      Linking.openURL('https://m.yes24.com/Goods/Detail/11519108');
    };

    return (
        <View style={styles.screenContainer}>
            <View style={styles.container}>
                <View style={styles.headerTitle}>
                    <Text style={styles.title}>오늘의 추천도서 📚</Text>
                    <Text style={styles.subTitle}>하루동안 분석한 아이의 감정을 기반으로 도서를 추천해드립니다!</Text>
                </View>
                <TouchableOpacity onPress={toggleExpanded} style={styles.bodyTitle}>
                  <Collapsible collapsed={collapsed}>
                      <View style={styles.collapsibleContent}>
                        <Text style={styles.bodyText}>2024년 6월 11일 화요일</Text>
                        <Text style={styles.bodySubText}>감정 분석 결과 Top 1 : 분노 😡</Text>
                        <TouchableOpacity onPress={handleImagePress}>
                          <Image source={require('../../assets/images/book.jpg')} style={styles.image} />
                          <Text style={styles.subBodyTitle}>몰리 뱅 글그림 / 박수현 역 | 책읽는곰 | 2013년 11월 26일</Text>
                        </TouchableOpacity>  
                      </View>
                  </Collapsible>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#FFF7E0',
        // justifyContent: 'center',
        // alignItems: 'top',
        paddingHorizontal: 16,
    },
    container: {
        width: '100%',
        borderRadius: 10,
        marginTop: 30,
        overflow: 'hidden',
        backgroundColor: '#FFFFFF',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
    },
    headerTitle: {
        padding: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#E0E0E0',
    },
    title: {
        textAlign: 'center',
        fontSize: 29,
        fontWeight: '600',
        color: '#333',
    },
    subTitle: {
        textAlign: 'center',
        marginTop: 10,
        fontSize: 13,
        color: '#666',
    },
    bodyTitle: {
        padding: 10,
        alignItems: 'center',
    },
    bodyText: {
      fontSize: 22,
      color: '#333',
      marginTop: 10,
  },
    bodySubText: {
        fontSize: 15,
        color: '#333',
        marginTop: 10,
        // marginBottom: 10,
    },
    collapsibleContent: {
        alignItems: 'center',
        padding: 10,
    },
    image: {
        marginTop: 20,
        marginBottom: 10,
        width: 280,
        height: 280,
        borderRadius: 10,
        marginBottom: 10,
    },
    subBodyTitle: {
      textAlign: 'center',
      marginTop: 10,
      marginBottom: 10,
      fontSize: 13,
      color: '#666',
  },
});

export default BoardScreen;
