import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import UserInfoScreen from '../screens/UserInfoScreen';
import FinalStepScreen from '../screens/FinalStepScreen';
import { FontAwesome } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';
import MatchScreen from '../screens/home/MatchScreen';
import MyMatched from '../screens/home/MyMatched';
import ProfileScreen from '../screens/home/ProfileScreen';
import MessagesScreen from '../screens/home/MessagesScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home';
          } else if (route.name === 'MatchScreen') {
            iconName = 'compass';
          } else if (route.name === 'MyMatched') {
            iconName = 'heart';
          } else if (route.name === 'Message') {
            iconName = 'comment';
          } else if (route.name === 'Profile') {
            iconName = 'user';
          }
          return <FontAwesome name={iconName as any} size={size} color={color} />;
        },
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#FF5864',
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarItemStyle: styles.tabBarItem,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Tab.Screen name="MatchScreen" component={MatchScreen} options={{ headerShown: false }} />
      <Tab.Screen name="MyMatched" component={MyMatched} options={{ headerShown: false }} />
      <Tab.Screen name="Message" component={MessagesScreen} options={{ headerShown: false }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#1C1C1C',
    borderRadius: 20,
    height: 60,
    position: 'absolute',
    bottom: 10,
    width: '94%',
    left: '5%',
    right: '5%',
    alignSelf: 'center',
    marginLeft: '3%',
    marginRight: '3%',
    alignContent: 'center',
  },
  tabBarItem: {
    margin: 10,
  },
});

export default BottomTabNavigator; 