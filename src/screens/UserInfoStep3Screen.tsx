import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { colors } from '../styles/colors';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';
import { StackNavigationProp } from '@react-navigation/stack';

// Stack parametrelerini tanımlayın
type RootStackParamList = {
  FinalStepScreen: undefined;
  UserInfoStep3Screen: { formData: any };
  UserInfoStep4Screen: { formData: any };
};

type UserInfoStep3ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'FinalStepScreen'>;
type UserInfoStep3ScreenRouteProp = RouteProp<RootStackParamList, 'UserInfoStep3Screen'>;

const UserInfoStep3Screen = () => {
  const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
  const navigation = useNavigation<UserInfoStep3ScreenNavigationProp>();
  const route = useRoute<UserInfoStep3ScreenRouteProp>();
  const { formData } = route.params || {};

  const hobbiesList = ['Reading', 'Traveling', 'Cooking', 'Sports', 'Music', 'Movies', 'Gaming'];

  const toggleHobby = (hobby: string) => {
    if (selectedHobbies.includes(hobby)) {
      setSelectedHobbies(selectedHobbies.filter(h => h !== hobby));
    } else {
      setSelectedHobbies([...selectedHobbies, hobby]);
    }
  };

  const handleContinue = () => {
    const updatedFormData = {
      ...formData,
      hobbies: selectedHobbies,
    };

    navigation.navigate('UserInfoStep4', { formData: updatedFormData });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <View style={styles.arrowContainer}>
          <FontAwesome name="arrow-left" size={20} color={colors.buttonText} />
        </View>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Netflix or hiking? 🎬⛰️ Let's find your perfect match!</Text>
        <View style={styles.tagList}>
          {hobbiesList.map((hobby, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.tag,
                selectedHobbies.includes(hobby) && styles.tagSelected,
              ]}
              onPress={() => toggleHobby(hobby)}
            >
              <Text style={[
                styles.tagText,
                selectedHobbies.includes(hobby) && styles.tagTextSelected,
              ]}>
                {hobby}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <TouchableOpacity
          style={[styles.button, selectedHobbies.length < 3 && styles.buttonDisabled]}
          onPress={handleContinue}
          disabled={selectedHobbies.length < 3}
        >
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
    marginTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 40,
    paddingHorizontal: 14,
    fontFamily: 'Montserrat-Bold',
  },
  tagList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    width: '90%',
  },
  tag: {
    alignItems: 'center',
    backgroundColor: colors.primary,
    borderRadius: 20,
    paddingVertical: 8,
    paddingHorizontal: 13,
    marginBottom: 13,
    marginRight: 13,
    borderWidth: 1,
    borderColor: colors.primary,
  },
  tagSelected: {
    borderColor: colors.primary,
    backgroundColor: '#fff',
    borderWidth: 1,
  },
  tagText: {
    color: colors.buttonText,
    fontSize: 14,
  },
  tagTextSelected: {
    color: colors.primary,
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
  buttonDisabled: {
    backgroundColor: colors.disabledButtonBackground,
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

export default UserInfoStep3Screen; 