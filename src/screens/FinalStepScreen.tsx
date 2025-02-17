import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../styles/colors';

const FinalStepScreen = () => {
  const navigation = useNavigation();

  const handleGoHome = () => {
    // Ana sayfaya veya başka bir hedefe yönlendirme
    navigation.navigate('HomeScreen'); // 'HomeScreen' yerine uygun ekran adını yazın
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Love is just a swipe away! 😉 Let’s get started. 🎉</Text>
        <Text style={styles.message}>🚀 Let’s find someone who matches your vibe.</Text>
        <TouchableOpacity style={styles.button} onPress={handleGoHome}>
          <Text style={styles.buttonText}>Go to Home</Text>
          <FontAwesome name="arrow-right" style={styles.buttonIcon} size={20} color={colors.buttonText} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  innerContainer: {
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 20,
    paddingHorizontal: 14,
  },
  message: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 40,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    alignItems: 'center',
    flexDirection: 'row',
    minWidth: '90%',
    justifyContent: 'center',
    textAlign: 'center',
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  buttonIcon: {
    marginLeft: 10,
  },
});

export default FinalStepScreen; 