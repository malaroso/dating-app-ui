import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Modal } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { colors } from '../styles/colors';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

// Stack parametrelerini tanımlayın
type RootStackParamList = {
  FinalStepScreen: undefined;
  UserInfoStep2Screen: { formData: any };
};

type UserInfoStep2ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FinalStepScreen'>;
type UserInfoStep2ScreenRouteProp = RouteProp<RootStackParamList, 'UserInfoStep2Screen'>;

const UserInfoStep2Screen = () => {
  const [zodiacSign, setZodiacSign] = useState('');
  const [relationshipStatus, setRelationshipStatus] = useState('');
  const [tempZodiacSign, setTempZodiacSign] = useState('');
  const [tempRelationshipStatus, setTempRelationshipStatus] = useState('');
  const [showZodiacPicker, setShowZodiacPicker] = useState(false);
  const [showRelationshipPicker, setShowRelationshipPicker] = useState(false);
  const navigation = useNavigation<UserInfoStep2ScreenNavigationProp>();
  const route = useRoute<UserInfoStep2ScreenRouteProp>();
  const { formData } = route.params || {};

  const handleContinue = () => {
    const updatedFormData = {
      ...formData,
      zodiacSign,
      relationshipStatus,
    };

    navigation.navigate('UserInfoStep3', { formData: updatedFormData });
  };

  const handleZodiacDone = () => {
    setZodiacSign(tempZodiacSign);
    setShowZodiacPicker(false);
  };

  const handleRelationshipDone = () => {
    setRelationshipStatus(tempRelationshipStatus);
    setShowRelationshipPicker(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <View style={styles.arrowContainer}>
          <FontAwesome name="arrow-left" size={20} color={colors.buttonText} />
        </View>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <View style={styles.titleContainer}>
            <Text style={styles.title}>Tell us a little more about you. 💖</Text>
            <Text style={styles.title2}>Your zodiac sign and relationship status help us find your perfect match!</Text>
        </View>
        <TouchableOpacity style={styles.input} onPress={() => {
          setTempZodiacSign(zodiacSign);
          setShowZodiacPicker(true);
        }}>
          <Text style={styles.inputText}>
            {zodiacSign || 'Select Zodiac Sign'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.input} onPress={() => {
          setTempRelationshipStatus(relationshipStatus);
          setShowRelationshipPicker(true);
        }}>
          <Text style={styles.inputText}>
            {relationshipStatus || 'Select Relationship Status'}
          </Text>
        </TouchableOpacity>
        <Modal
          visible={showZodiacPicker}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowZodiacPicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.pickerContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setShowZodiacPicker(false)}>
                <FontAwesome name="close" size={24} color={colors.text} />
              </TouchableOpacity>
              <Picker
                selectedValue={tempZodiacSign}
                onValueChange={(itemValue) => setTempZodiacSign(itemValue)}
                style={{ color: 'black', width: '100%' }}
                itemStyle={{ color: 'black' }}
              >
                <Picker.Item label="Aries" value="Aries" />
                <Picker.Item label="Taurus" value="Taurus" />
                <Picker.Item label="Gemini" value="Gemini" />
                <Picker.Item label="Cancer" value="Cancer" />
                <Picker.Item label="Leo" value="Leo" />
                <Picker.Item label="Virgo" value="Virgo" />
                <Picker.Item label="Libra" value="Libra" />
                <Picker.Item label="Scorpio" value="Scorpio" />
                <Picker.Item label="Sagittarius" value="Sagittarius" />
                <Picker.Item label="Capricorn" value="Capricorn" />
                <Picker.Item label="Aquarius" value="Aquarius" />
                <Picker.Item label="Pisces" value="Pisces" />
              </Picker>
              <TouchableOpacity style={styles.modalButton} onPress={handleZodiacDone}>
                <Text style={styles.buttonText}>Done  🐝</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Modal
          visible={showRelationshipPicker}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setShowRelationshipPicker(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.pickerContainer}>
              <TouchableOpacity style={styles.closeButton} onPress={() => setShowRelationshipPicker(false)}>
                <FontAwesome name="close" size={24} color={colors.text} />
              </TouchableOpacity>
              <Picker
                selectedValue={tempRelationshipStatus}
                onValueChange={(itemValue) => setTempRelationshipStatus(itemValue)}
                style={{ color: 'black', width: '100%' }}
                itemStyle={{ color: 'black' }}
              >
                <Picker.Item label="Single" value="Single" />
                <Picker.Item label="In a Relationship" value="In a Relationship" />
                <Picker.Item label="Married" value="Married" />
                <Picker.Item label="Complicated" value="Complicated" />
              </Picker>
              <TouchableOpacity style={styles.modalButton} onPress={handleRelationshipDone}>
                <Text style={styles.buttonText}>Done  💞</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <TouchableOpacity style={styles.button} onPress={handleContinue}>
          <Text style={styles.buttonText}>Continue <FontAwesome name="arrow-right" style={styles.buttonfonts} size={20} color={colors.buttonText} /></Text>
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
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 14,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
    fontFamily: 'Montserrat-Bold',
  },
  title2: {
    fontSize: 14,
    color: colors.text,
    marginBottom: 40,
    fontFamily: 'Montserrat-Medium',
  },
  input: {
    width: '90%',
    height: 50,
    borderColor: colors.primary,
    borderWidth: 1,
    borderRadius: 25,
    marginBottom: 15,
    paddingHorizontal: 15,
    backgroundColor: colors.inputBackground,
    justifyContent: 'center',
  },
  inputText: {
    fontSize: 16,
    color: colors.text,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  pickerContainer: {
    backgroundColor: colors.inputBackground,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  closeButton: {
    alignSelf: 'flex-end',
    marginBottom: 10,
  },
  modalButton: {
    backgroundColor: colors.buttonBackground,
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 30,
    marginTop: 20,
    alignItems: 'center',
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
  buttonfonts: {
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: 'medium',
  },
});

export default UserInfoStep2Screen; 