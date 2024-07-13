import React, { useMemo, useRef } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet';
import { BarChart } from 'react-native-chart-kit';

const ProfileScreen = () => {
  const bottomSheetRef = useRef(null);

  // 감정 데이터
  const emotions = [
    { id: 1, name: '행복', value: 80 },
    { id: 2, name: '슬픔', value: 50 },
    { id: 3, name: '분노', value: 70 },
    { id: 4, name: '두려움', value: 60 },
    { id: 5, name: '놀람', value: 90 },
  ];

  // 그래프 데이터
  const chartData = {
    labels: emotions.map((emotion) => emotion.name),
    datasets: [
      {
        data: emotions.map((emotion) => emotion.value),
        color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`, // 주황색
      },
    ],
  };

  const chartConfig = {
    backgroundColor: '#f1f1f1',
    backgroundGradientFrom: '#f1f1f1',
    backgroundGradientTo: '#f1f1f1',
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 165, 0, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },
    propsForDots: {
      r: '6',
      strokeWidth: '2',
      stroke: '#ffa500',
    },
  };

  // Bottom Sheet의 스냅 포인트
  const snapPoints = useMemo(() => ['25%', '50%', '75%'], []);

  return (
    <BottomSheet
      ref={bottomSheetRef}
      snapPoints={snapPoints}
      index={1} // 초기 위치 설정
    >
      <BottomSheetView style={styles.container}>
        <FlatList
          data={emotions}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.emotionItem}>
              <Text style={styles.emotionName}>{item.name}</Text>
              <BarChart
                data={{
                  labels: [item.name], // BarChart는 라벨이 필요합니다.
                  datasets: [
                    {
                      data: [item.value],
                    },
                  ],
                }}
                width={100}
                height={50}
                chartConfig={chartConfig}
                withVerticalLines={false}
                withHorizontalLines={false}
                withDots={false}
                withInnerLines={false}
                fromZero={true}
              />
            </View>
          )}
          contentContainerStyle={styles.emotionList}
        />
      </BottomSheetView>
    </BottomSheet>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ffa500',
  },
  handle: {
    backgroundColor: '#ffa500',
    width: 40,
    height: 6,
    borderRadius: 3,
    marginVertical: 8,
  },
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 24,
  },
  emotionList: {
    paddingVertical: 16,
  },
  emotionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  emotionName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default ProfileScreen;
