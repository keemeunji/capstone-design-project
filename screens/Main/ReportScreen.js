import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, ScrollView, Button, Image, TouchableOpacity } from 'react-native';
import * as Progress from 'react-native-progress';

const ReportScreen = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [imageSource, setImageSource] = useState(require('../../assets/images/chicky/chick (5).png'));

  const fetchWithTimeout = (url, options, timeout = 30000) => {
    return Promise.race([
      fetch(url, options),
      new Promise((_, reject) =>
        setTimeout(() => reject(new Error('timeout')), timeout)
      )
    ]);
  };

  const fetchData = () => {
    setLoading(true);
    fetchWithTimeout('http://192.168.0.241:5001/emotion_analysis_results', {}, 30000)
      .then(response => response.json())
      .then(json => {
        setData(json);
        setLoading(false);
        setImageSource(require('../../assets/images/emotion/grinning.png')); // 데이터를 성공적으로 가져왔을 때 이미지 변경
      })
      .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <View style={styles.container}>
      <Image source={imageSource} style={styles.chickImage} />
      <Text style={styles.title}>감정분석 병아리</Text>
       <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={fetchData}
        >
          <Text style={styles.buttonText}>감정분석하기</Text>
        </TouchableOpacity>
      </View>
      {/* <Button style={styles.button} title="감정분석하기" onPress={fetchData} color="#FFA500" /> */}
      {loading && <ActivityIndicator size="large" color="#FFA500" style={styles.loading} />}
      {data && !loading && (
        <ScrollView style={styles.dataContainer}>
          <Text style={styles.date}>날짜: {data.date_today}</Text>
          <View style={styles.ratioContainer}>
            <Text style={styles.label}>종합 행복 지수: </Text>
            <Text style={styles.ratio}>{data.happiness_ratio}</Text>
            <Progress.Bar
              progress={data.happiness_ratio / 100}
              width={150}
              color="#FFD700"
              style={styles.progressBar}
            />
          </View>
          <View style={styles.ratioContainer}>
            <Text style={styles.label}>종합 우울 지수: </Text>
            <Text style={styles.ratio}>{data.depression_ratio}</Text>
            <Progress.Bar
              progress={data.depression_ratio / 100}
              width={150}
              color="#1E90FF"
              style={styles.progressBar}
            />
          </View>
          <Text style={styles.label}>상위 감정:</Text>
          <Text style={styles.emotion}>1. {data.top1_emotion} ({data.top1_percentage}%)</Text>
          <Progress.Bar
            progress={data.top1_percentage / 100}
            width={200}
            color="#FF6347"
            style={styles.progressBar}
          />
          <Text style={styles.emotion}>2. {data.top2_emotion} ({data.top2_percentage}%)</Text>
          <Progress.Bar
            progress={data.top2_percentage / 100}
            width={200}
            color="#FF8C00"
            style={styles.progressBar}
          />
          <Text style={styles.emotion}>3. {data.top3_emotion} ({data.top3_percentage}%)</Text>
          <Progress.Bar
            progress={data.top3_percentage / 100}
            width={200}
            color="#FFD700"
            style={styles.progressBar}
          />
        </ScrollView>
      )}
      {!data && !loading && (
        <Text style={styles.message}>데이터를 불러오려면 버튼을 누르세요.</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF8DC',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  chickImage: {
    width: 100,
    height: 100,
    marginBottom: 30,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 40,
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -50, // 이미지와 버튼 사이의 간격 조정
  },
  button: {
    backgroundColor: '#FFD580',
    marginTop: 50,
    padding: 15,
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
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loading: {
    marginTop: 20,
  },
  dataContainer: {
    marginTop: 20,
    backgroundColor: '#FFFACD',
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  date: {
    fontSize: 18,
    color: '#FFA500',
    marginBottom: 10,
  },
  ratioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  label: {
    fontSize: 18,
    color: '#FF8C00',
  },
  ratio: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF4500',
    marginLeft: 10,
  },
  emotion: {
    fontSize: 16,
    color: '#FF6347',
    marginBottom: 5,
  },
  progressBar: {
    marginTop: 5,
    marginLeft: 10,
  },
  message: {
    fontSize: 15,
    color: '#FF8C00',
    marginTop: 20,
    marginBottom: 50,
  },
});

export default ReportScreen;
