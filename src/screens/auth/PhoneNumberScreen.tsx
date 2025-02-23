import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, SafeAreaView, Modal, FlatList } from 'react-native';
import { colors } from '../../styles/colors';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import CountryFlag from 'react-native-country-flag';
import { StackNavigationProp } from '@react-navigation/stack';

// Stack parametrelerini tanımlayın
type RootStackParamList = {
  Login: undefined;
  VerificationScreen: { phoneNumber: string };
};

type PhoneNumberScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;

const PhoneNumberScreen = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+90');
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation<PhoneNumberScreenNavigationProp>();

  const countryCodes = [
    { label: 'Turkey', value: '+90', code: 'TR' },
    { label: 'USA', value: '+1', code: 'US' },
    { label: 'UK', value: '+44', code: 'GB' },
    { label: 'Germany', value: '+49', code: 'DE' },
    { label: 'France', value: '+33', code: 'FR' },
  ];

  const handleNext = () => {
    navigation.navigate('VerificationScreen', { phoneNumber });
  };

  const renderCountryCode = ({ item }: { item: any }) => (
    <TouchableOpacity
      style={styles.modalItem}
      onPress={() => {
        setCountryCode(item.value);
        setModalVisible(false);
      }}
    >
      <View style={styles.flagContainer}>
        <CountryFlag isoCode={item.code} size={20} />
        <Text style={styles.modalText}>{item.label} ({item.value})</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Login')}>
        <View style={styles.arrowContainer}>
          <FontAwesome name="arrow-left" size={20} color={colors.buttonText} />
        </View>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Add Phone Number</Text>
        <Text style={styles.subtitle}>We will send an OTP Verification to you.</Text>
        <View style={styles.inputContainer}>
          <TouchableOpacity style={styles.countryCodeButton} onPress={() => setModalVisible(true)}>
            <CountryFlag isoCode={countryCodes.find(code => code.value === countryCode)?.code || 'TR'} size={20} />
            <Text style={styles.countryCodeText}>{countryCode}</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Phone Number"
            keyboardType="phone-pad"
            value={phoneNumber} maxLength={10}
            onChangeText={setPhoneNumber}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={handleNext}>
          <Text style={styles.buttonText}>Send me the code</Text>
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.bottomSheet}>
          <View style={styles.modalHeader}>
            <Text style={styles.modalTitle}>Select Country Code</Text>
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <FontAwesome name="close" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
          <FlatList
            data={countryCodes}
            renderItem={renderCountryCode}
            keyExtractor={(item) => item.value}
          />
        </View>
      </Modal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
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
  innerContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    marginTop: 100,
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
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    marginBottom: 15,
  },
  countryCodeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    marginRight: 10,
    backgroundColor: colors.inputBackground,
  },
  countryCodeText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 50,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 15,
    backgroundColor: colors.inputBackground,
  },
  button: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'bold',
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.inputBackground,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '50%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
  },
  modalItem: {
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
  },
  modalText: {
    fontSize: 16,
    color: colors.text,
    marginLeft: 10,
  },
  flagContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PhoneNumberScreen; 