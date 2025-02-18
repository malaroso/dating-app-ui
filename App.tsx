import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';
import SplashScreen from './src/screens/SplashScreen';
import LoginScreen from './src/screens/LoginScreen';
import PhoneNumberScreen from './src/screens/PhoneNumberScreen';
import VerificationScreen from './src/screens/VerificationScreen';
import UserInfoScreen from './src/screens/UserInfoScreen';
import UserInfoStep2Screen from './src/screens/UserInfoStep2Screen';
import UserInfoStep3Screen from './src/screens/UserInfoStep3Screen';
import UserInfoStep4Screen from './src/screens/UserInfoStep4Screen';
import FinalStepScreen from './src/screens/FinalStepScreen';
import BottomTabNavigator from './src/navigation/BottomTabNavigator';
import ChatScreen from './src/screens/home/ChatScreen';

const Stack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = Font.useFonts({
    'Montserrat-Medium': require('./assets/fonts/Montserrat-Medium.ttf'),
    'Montserrat-Bold': require('./assets/fonts/Montserrat-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VerificationScreen" component={VerificationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserInfoScreen" component={UserInfoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="UserInfoStep2" component={UserInfoStep2Screen} options={{ headerShown: false }} />
        <Stack.Screen name="UserInfoStep3" component={UserInfoStep3Screen} options={{ headerShown: false }} />
        <Stack.Screen name="UserInfoStep4" component={UserInfoStep4Screen} options={{ headerShown: false }} />
        <Stack.Screen name="FinalStepScreen" component={FinalStepScreen} options={{ headerShown: false }} />

        <Stack.Screen name='chatScreen' component={ChatScreen} options={{ headerShown: false }} />
        {/* Bottom Tab Navigator */}
        <Stack.Screen name="Main" component={BottomTabNavigator} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App; 