import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Main/HomeScreen';
import ReportScreen from '../screens/Main/ReportScreen';
import BoardScreen from '../screens/Main/BoardScreen';
import ChatRoomListScreen from '../screens/Main/ChatRoomListScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import COLORS from '../constants/colors';

const Tab = createBottomTabNavigator();

const homeName = '홈';
const reportName = '감정 분석';
const boardName = '추천 도서';
const chatName = '아바타톡';
const profileName = '마이페이지';

export default function MainNavigator() {
  return (
    <Tab.Navigator
      initialRouteName={homeName}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === homeName) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === reportName) {
            iconName = focused ? 'document-text' : 'document-text-outline';
          } else if (rn === boardName) {
            iconName = focused ? 'clipboard' : 'clipboard-outline';
          } else if (rn === chatName) {
            iconName = focused ? 'chatbox-ellipses' : 'chatbox-ellipses-outline';
          } else if (rn === profileName) {
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: COLORS.tangerine,
        inactiveTintColor: 'grey',
        labelStyle: { fontSize: 13 },
        style: { padding: 10, height: 100 },
      }}
    >
      <Tab.Screen name={homeName} component={HomeScreen} />
      <Tab.Screen name={reportName} component={ReportScreen} />
      <Tab.Screen name={boardName} component={BoardScreen} />
      <Tab.Screen name={chatName} component={ChatRoomListScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
