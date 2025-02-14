import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';

const FinalStepScreen = () => {
  const route = useRoute();
  const { formData } = route.params;

  return (
    <View>
      <Text>First Name: {formData.firstName}</Text>
      <Text>Last Name: {formData.lastName}</Text>
      <Text>Birth Date: {formData.birthDate.toLocaleDateString()}</Text>
      <Text>Phone Number: {formData.phoneNumber}</Text>
    </View>
  );
}; 