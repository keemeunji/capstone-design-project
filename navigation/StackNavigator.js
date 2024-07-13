import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import VideoScreen from "../screens/Main/VideoScreen"
// import ProfileEdit from "../screens//Main/ProfileEditScreen";

const Stack = createStackNavigator();

function StackNavigator() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Video"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="VideoScreen" component={VideoScreen} />
          {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  
  export default StackNavigator;