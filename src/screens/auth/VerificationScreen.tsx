import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors } from '../../styles/colors';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading';  

// Stack parametrelerini tanımlayın
type RootStackParamList = {
  UserInfoScreen: undefined;
  PhoneNumberScreen: undefined;
};

type VerificationScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UserInfoScreen'>;

const VerificationScreen = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const navigation = useNavigation<VerificationScreenNavigationProp>();
  const route = useRoute();
  const { phoneNumber } = route.params;
  const inputs = useRef<Array<TextInput | null>>([]);

  const [fontsLoaded] = Font.useFonts({
    'Montserrat-Medium': require('../../../assets/fonts/Montserrat-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const handleVerify = () => {
    // Doğrulama işlemi burada yapılabilir
    navigation.navigate('UserInfoScreen');
  };

  const handleChangeText = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    // Eğer bir sonraki input varsa, ona odaklan
    if (text && index < inputs.current.length - 1) {
      inputs.current[index + 1]?.focus();
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('PhoneNumberScreen')}>
        <View style={styles.arrowContainer}>
          <FontAwesome name="arrow-left" size={20} color={colors.buttonText} />
        </View>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Confirm your number</Text>
        <Text style={styles.subtitle}>Enter the 6-digit code we sent to {phoneNumber}</Text>
        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.input}
              keyboardType="number-pad"
              maxLength={1}
              value={digit}
              onChangeText={(text) => handleChangeText(text, index)}
              ref={(ref) => (inputs.current[index] = ref)}
            />
          ))}
        </View>
        <TouchableOpacity>
          <Text style={styles.resendText}>Send code again</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleVerify}>
          <Text style={styles.buttonText}>Continue</Text>
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
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 100,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
  },
  arrowContainer: {
    backgroundColor: colors.primary,
    borderRadius: 20,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
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
    textAlign: 'center',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 20,
  },
  input: {
    width: 40,
    height: 50,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 18,
    color: colors.text,
    backgroundColor: colors.inputBackground,
  },
  resendText: {
    color: colors.primary,
    marginBottom: 20,
    textAlign: 'center',
  },
  button: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 12,
    paddingHorizontal: 15,
    width: '80%',
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginBottom: 20,
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default VerificationScreen; 