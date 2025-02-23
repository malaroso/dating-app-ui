import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated, Image } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../styles/colors';
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
  const moveAnim = useRef(new Animated.Value(0)).current;

  const [fontsLoaded] = Font.useFonts({
    'Montserrat-Medium': require('../../../assets/fonts/Montserrat-Medium.ttf'),
  });

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.2,
          duration: 2200,
          useNativeDriver: true,
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 1200,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.sequence([
        Animated.timing(moveAnim, {
          toValue: -10,
          duration: 2000,
          useNativeDriver: true,
        }),
        Animated.timing(moveAnim, {
          toValue: 0,
          duration: 2000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scaleAnim, moveAnim]);

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handlePress = () => {
    navigation.navigate('Login');
  };

  return (
    <LinearGradient colors={[colors.gradientStart, colors.gradientEnd]}  start={{ x: 0, y: 0 }}    end={{ x: 1, y: 1.1 }}  locations={[1, .2]}  style={styles.background}>
      <Animated.View style={[styles.cloud1, { transform: [{ translateY: moveAnim }] }]}>
        <Ionicons name="heart-outline" size={80} color={colors.buttonText} />
      </Animated.View>
      <Animated.View style={[styles.cloud3, { transform: [{ translateY: moveAnim }] }]}>
        <Ionicons name="heart-outline" size={45} color={colors.buttonText} />
      </Animated.View>
      <Animated.View style={[styles.cloud4, { transform: [{ translateY: moveAnim }] }]}>
        <Ionicons name="heart-outline" size={32} color={colors.buttonText} />
      </Animated.View>
      <Animated.View style={[styles.cloud2, { transform: [{ translateY: moveAnim }] }]}>
        <Ionicons name="heart-outline" size={40} color={colors.buttonText} />
      </Animated.View>
      <Animated.View style={[styles.cloud5, { transform: [{ translateY: moveAnim }] }]}>
        <Ionicons name="heart-outline" size={60} color={colors.buttonText} />
      </Animated.View>
      <Animated.View style={[styles.cloud6, { transform: [{ translateY: moveAnim }] }]}>
        <Ionicons name="heart-outline" size={80} color={colors.buttonText} />
      </Animated.View>
      <View style={styles.container}>
        <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
          <Image source={require('../../../assets/remove-logo.png')} style={styles.logo} />
        </Animated.View>
        <Text style={styles.subtitle}>Find your perfect match and connect on a deeper level. 💖</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={handlePress}>
        <Text style={styles.buttonText}>Love starts here – welcome to Coeur!</Text>
        <View style={styles.iconContainer}>
          <Ionicons name="arrow-forward" size={20} color={colors.primary} />
        </View>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cloud1: {
    position: 'absolute',
    top: 50,
    left: 30,
    opacity: 0.2,
  },
  cloud3: {
    position: 'absolute',
    top: 50,
    left: 20,
    opacity: 0.2,
  },
  cloud4: {
    position: 'absolute',
    top: 45,
    left: 10,
    opacity: 0.2,
  },
  cloud2: {
    position: 'absolute',
    bottom: 125,
    right: 10,
    opacity: 0.2,
  },
  cloud5: {
    position: 'absolute',
    bottom: 130,
    right: 20,
    opacity: 0.2,
  },
  cloud6: {
    position: 'absolute',
    bottom: 140,
    right: 30,
    opacity: 0.2,
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 160,
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
    fontSize: 15,
    marginRight: 10,
    fontFamily: 'Montserrat-Medium',
    fontWeight: 'bold',
  },
  iconContainer: {
    backgroundColor: colors.buttonText,
    borderRadius: 15,
    padding: 5,
  },
});

export default SplashScreen; 