import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { colors } from '../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';

// Stack parametrelerini tanımlayın
type RootStackParamList = {
  Splash: undefined;
  Login: undefined;
};

const SplashScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList, 'Splash'>>();
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const [fontsLoaded] = Font.useFonts({
    'Montserrat-Medium': require('../../assets/fonts/Montserrat-Medium.ttf'),
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.background}>
      <Ionicons name="cloud-outline" size={70} color={colors.buttonText} style={styles.cloud1} />
      <Ionicons name="cloud-outline" size={50} color={colors.buttonText} style={styles.cloud2} />
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Image source={require('../../assets/remove-logo.png')} style={styles.logo} />
        </Animated.View>
        <Text style={styles.subtitle}>Find your perfect match and connect on a deeper level. 💖</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
          <Text style={styles.buttonText}>Love starts here – welcome to Coeur!</Text>
          <View style={styles.iconContainer}>
            <Ionicons name="arrow-forward" size={20} color={colors.primary} />
          </View>
        </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloud1: {
    position: 'absolute',
    top: 50,
    left: 30,
    opacity: 0.2,
  },
  cloud2: {
    position: 'absolute',
    bottom: 90,
    right: 50,
    opacity: 0.2,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
  },
  title: {
    fontSize: 42,
    color: colors.buttonText,
    marginBottom: 10,
    fontFamily: 'Montserrat-Medium',
  },
  subtitle: {
    fontSize: 16,
    color: colors.buttonText,
    textAlign: 'center',
    marginHorizontal: 12,
    marginBottom: 20,
    fontFamily: 'Montserrat-Medium',
  },
  button: {
    marginTop: 20,
    backgroundColor: colors.buttonBackground,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: 30,
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    marginRight: 10,
  },
  iconContainer: {
    backgroundColor: colors.buttonText,
    borderRadius: 15,
    padding: 5,
  },
});

export default SplashScreen; 