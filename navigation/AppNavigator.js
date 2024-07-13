import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

function AppNavigator() {
  const userIsAuthenticated = true; // 사용자의 인증 상태에 따라 결정

  return (
    <NavigationContainer>
      {userIsAuthenticated ? (
        <Stack.Navigator
          screenOptions={{
            gestureEnabled: false, // 화면 전환 제스처 비활성화
          }}
        >
          <Stack.Screen name="Main" component={MainScreen} />
          <Stack.Screen name="Profile" component={ProfileScreen} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator>
          <Stack.Screen name="Login" component={LoginScreen} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}