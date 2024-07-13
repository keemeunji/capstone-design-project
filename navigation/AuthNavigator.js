import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../screens/Auth/WelcomeScreen';
import LoginScreen from '../screens/Auth/LoginScreen';
import SignupScreen from '../screens/Auth/SignupScreen';
import MainNavigator from './MainNavigator';
import VideoScreen from '../screens/Main/VideoScreen';
import ProfileEditScreen from '../screens/Main/ProfileEditScreen';
import ProfileScreen from '../screens/Main/ProfileScreen';
import Angry from '../components/Board/Angry';
import Sad from '../components/Board/Sad';
import Happy from '../components/Board/Happy';
import GptChatScreen from '../screens/Main/GptChatScreen';
import AvatarChatScreen from '../screens/Main/AvatarChatScreen';
import ChatRoomListScreen from '../screens/Main/ChatRoomListScreen';

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="Welcome"
          component={WelcomeScreen}
          options={{
            gestureEnabled: true, // 화면 전환 제스처 활성화
          }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={{
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="MainNavigator"
          component={MainNavigator}
          options={{
            gestureEnabled: true, 
          }}
        />
        <Stack.Screen
          name="Video"
          component={VideoScreen}
          options={{
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="ProfileEdit"
          component={ProfileEditScreen}
          options={{
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            gestureEnabled: true, 
          }}
        />
        <Stack.Screen
          name="Happy"
          component={Happy}
          options={{
            gestureEnabled: true, 
          }}
        />
        <Stack.Screen
          name="Angry"
          component={Angry}
          options={{
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="Sad"
          component={Sad}
          options={{
            gestureEnabled: true, 
          }}
        />
        <Stack.Screen
          name="GptChatScreen"
          component={GptChatScreen}
          options={{
            gestureEnabled: true, 
          }}
        />
        <Stack.Screen
          name="AvatarChatScreen"
          component={AvatarChatScreen}
          options={{
            gestureEnabled: true,
          }}
        />
        <Stack.Screen
          name="ChatRoomList"
          component={ChatRoomListScreen}
          options={{
            gestureEnabled: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AuthNavigator;
