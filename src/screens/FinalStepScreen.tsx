import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';

// Stack parametrelerini tanımlayın
type RootStackParamList = {
  FinalStepScreen: { formData: any };
};

type FinalStepScreenRouteProp = RouteProp<RootStackParamList, 'FinalStepScreen'>;

const FinalStepScreen = () => {
  const route = useRoute<FinalStepScreenRouteProp>();
  const { formData } = route.params || {};

  // formData'yı konsola yazdır
  console.log('Form Data:', formData);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Final Step</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default FinalStepScreen; 