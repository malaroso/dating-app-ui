import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, FlatList, SafeAreaView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { FontAwesome } from '@expo/vector-icons';
import { colors } from '../../styles/colors';

// Stack parametrelerini tanımlayın
type RootStackParamList = {
  FinalStepScreen: { formData: any };
  UserInfoStep4Screen: { formData: any };
};

type UserInfoStep4ScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UserInfoStep4Screen'>;
type UserInfoStep4ScreenRouteProp = RouteProp<RootStackParamList, 'UserInfoStep4Screen'>;

const UserInfoStep4Screen = () => {
  const [photos, setPhotos] = useState<string[]>([]);
  const navigation = useNavigation<UserInfoStep4ScreenNavigationProp>();
  const route = useRoute<UserInfoStep4ScreenRouteProp>();
  const { formData } = route.params || {};

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsMultipleSelection: true,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setPhotos([...photos, ...result.assets.map(asset => asset.uri)]);
    }
  };

  const removePhoto = (photo: string) => {
    setPhotos(photos.filter(p => p !== photo));
  };

  const handleContinue = () => {
    // Fotoğrafları formData'ya ekleyip FinalStepScreen'e yönlendirin
    const updatedFormData = { ...formData, photos };
    navigation.navigate('FinalStepScreen', { formData: updatedFormData });
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <View style={styles.arrowContainer}>
          <FontAwesome name="arrow-left" size={20} color={colors.buttonText} />
        </View>
      </TouchableOpacity>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>Lights, camera, attraction! 🎬 Add your photos.</Text>
        <FlatList
          data={photos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
              <View style={styles.photoContainer}>
              <Image source={{ uri: item }} style={styles.image} />
              <TouchableOpacity style={styles.removeButton} onPress={() => removePhoto(item)}>
                <FontAwesome name="times" size={20} color={colors.buttonText} />
              </TouchableOpacity>
            </View>
          )}
          numColumns={3}
        />
        <TouchableOpacity style={styles.button} onPress={pickImage}>
          <Text style={styles.buttonText}>📷 Add some photos</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, photos.length < 1 && styles.buttonDisabled]}
          onPress={handleContinue}
          disabled={photos.length < 1}
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
    backgroundColor: '#fff',
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
    marginTop: 80,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  image: {
    width: 110,
    height: 110,
    margin: 5,
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
    backgroundColor: colors.buttonBackground,
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
  photoContainer: {
    position: 'relative',
  },
  removeButton: {
    position: 'absolute',
    top: 5,
    right: 5,
    backgroundColor: colors.buttonBackground,
    padding: 5,
    borderRadius: 10,
  },
});

export default UserInfoStep4Screen; 