import React from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { colors } from '../styles/colors';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  Login: undefined;
  PhoneNumberScreen: undefined;
  Main: undefined;
};

type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const LoginScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <SafeAreaView style={styles.innerContainer}>
        <View style={styles.logoContainer}>
          <Image source={require('../../assets/remove-logo.png')} style={styles.logo} />
        </View>
        <ScrollView contentContainerStyle={styles.inlineContainer}>
          <Text style={styles.title}>Sign In</Text>
          <Text style={styles.subtitle}>Hi! Welcome back, you've been missed!</Text>

          <View style={styles.inputContainer}>
            <FontAwesome name="envelope" size={20} color={colors.text} style={styles.icon} />
            <TextInput
              placeholder="Your mail here"
              placeholderTextColor={colors.text}
              style={styles.input}
            />
          </View>

          <View style={styles.inputContainer}>
            <FontAwesome name="lock" size={20} color={colors.text} style={styles.icon} />
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.text}
              secureTextEntry
              style={styles.input}
            />
          </View>

          <TouchableOpacity>
            <Text style={styles.forgotPassword}>Forgot Password?</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
            <Text style={styles.buttonText}>Sign in</Text>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('PhoneNumberScreen')}>
            <Text style={styles.footerText}>
              Don't have an account? <Text style={styles.signUp}>Sign Up</Text>
            </Text>
          </TouchableOpacity>

          <Text style={styles.orText}>Or</Text>

          <View style={styles.socialContainer}>
            <FontAwesome name="facebook" size={30} color="#3b5998" style={styles.socialIcon} />
            <FontAwesome name="google" size={30} color="#db4437" style={styles.socialIcon} />
            <FontAwesome name="apple" size={30} color="#000000" style={styles.socialIcon} />
          </View>
        </ScrollView>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF4F79',
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFF',
  },
  inlineContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 0,
  },
  logo: {
    width: 150,
    marginTop: 0,
    height: 150,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputBackground,
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: colors.primary,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: colors.text,
  },
  forgotPassword: {
    color: colors.accent,
    marginBottom: 20,
  },
  button: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerText: {
    color: colors.text,
    marginBottom: 10,
  },
  signUp: {
    color: colors.accent,
    fontWeight: 'bold',
  },
  orText: {
    color: colors.text,
    marginVertical: 10,
    marginBottom: 10,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
  },
  socialIcon: {
    marginHorizontal: 10,
  },
});

export default LoginScreen; 