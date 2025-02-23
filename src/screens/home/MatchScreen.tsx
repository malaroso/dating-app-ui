import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { PanGestureHandler, GestureHandlerRootView } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS, useDerivedValue } from 'react-native-reanimated';
import { colors } from '../../styles/colors';

const profiles = [
  {
    id: 1,
    name: 'Gracia',
    location: 'London, UK',
    distance: '8.5 km Away',
    age: '23',
    height: '170 cm',
    description: 'I am a passionate dancer and a great cook. I love to travel and explore new cultures.',
    speak: 'English, French',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    image2: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hobbies: ['Photography', 'Traveling', 'Music', 'Cars', 'History', 'Video Games'],
  },
  {
    id: 2,
    name: 'Sophia',
    location: 'New York, USA',
    distance: '12 km Away',
    age: '25',
    height: '165 cm',
    speak: 'English, Spanish',
    description: 'I am a passionate dancer and a great cook. I love to travel and explore new cultures.',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    image2: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hobbies: ['Dancing', 'Cooking', 'Art', 'Fitness'],
  },
  {
    id: 3,
    name: 'Emma',
    location: 'Paris, France',
    distance: '5 km Away',
    age: '27',
    height: '170 cm',
    speak: 'English, French',
    description: 'I am a passionate dancer and a great cook. I love to travel and explore new cultures.',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    image2: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    hobbies: ['Yoga', 'Photography', 'Writing', 'Movies'],
  },
  {
    id: 4,
    name: 'Elise',
    location: 'Paris, France',
    distance: '5 km Away',
    age: '27',
    height: '170 cm',
    speak: 'English, French',
    description: 'I am a passionate dancer and a great cook. I love to travel and explore new cultures.',
    image: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600',
    image2: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600',
    hobbies: ['Yoga', 'Photography', 'Writing', 'Movies'],
  }
];

const hobbyIcons: { [key: string]: string } = {
  Photography: 'camera',
  Traveling: 'plane',
  Music: 'music',
  Cars: 'car',
  History: 'book',
  'Video Games': 'gamepad',
  Dancing: 'music',
  Cooking: 'cutlery',
  Art: 'paint-brush',
  Fitness: 'heartbeat',
  Yoga: 'leaf',
  Writing: 'pencil',
  Movies: 'film',
};

const MatchScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);
  const swipeText = useSharedValue('');
  
  const nextProfile = () => {
    if (currentIndex < profiles.length) {
      setCurrentIndex(prev => Math.min(prev + 1, profiles.length));
      translateX.value = 0;
      swipeText.value = '';
      opacity.value = withSpring(0);
    }
  };

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: translateX.value }],
  }));

  const textAnimatedStyle = useAnimatedStyle(() => ({
    opacity: swipeText.value !== '' ? opacity.value : 0,
    transform: [
      { 
        translateX: translateX.value > 0 
          ? 50  // Sağa kaydırma durumu
          : -50 // Sola kaydırma durumu
      }
    ],
  }));

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Image
              source={require('../../../assets/300-2.jpg')}
              style={styles.profileImage}
            />
            <View>
              <Text style={styles.greeting}>
                Hello, <Text style={styles.username}>Malarosso</Text>
              </Text>
              <Text style={styles.subTitle}>Let's Find A Match!</Text>
            </View>
          </View>
          <View style={styles.icons}>
            <TouchableOpacity>
              <FontAwesome name="bell" size={24} color={colors.text} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconMargin}>
              <FontAwesome name="cog" size={24} color={colors.text} />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cardContainer}>
          {currentIndex < profiles.length ? (
            <PanGestureHandler
              onGestureEvent={(event) => {
                translateX.value = event.nativeEvent.translationX;
                opacity.value = Math.abs(event.nativeEvent.translationX) / 200;
                swipeText.value = event.nativeEvent.translationX < 0 ? 'heart' : '';
              }}
              onHandlerStateChange={(event) => {
                if (Math.abs(event.nativeEvent.translationX) > 200) {
                  runOnJS(nextProfile)();
                } else {
                  translateX.value = withSpring(0);
                  opacity.value = withSpring(0);
                }
              }}
            >
              <Animated.View style={[styles.card, animatedStyle]}>
                <ScrollView showsVerticalScrollIndicator={false}>
                  <Image source={{ uri: profiles[currentIndex].image }} style={styles.matchImage} />
                  <View style={styles.cardInfo}>
                    <Text style={styles.matchName}>{profiles[currentIndex].name}, {profiles[currentIndex].age}</Text>
                    <Text style={styles.matchDetails}> <FontAwesome name="map-marker" size={16} color={colors.text} /> {profiles[currentIndex].location}</Text>
                    <Text style={styles.matchDetails}> <FontAwesome name="location-arrow" size={16} color={colors.text} /> {profiles[currentIndex].distance}</Text>
                    <Text style={styles.description}> <FontAwesome name="user" size={16} color={colors.text} /> {profiles[currentIndex].description}</Text>
                    <Text style={styles.matchDetails}> <FontAwesome name="volume-up" size={16} color={colors.text} /> Speaks: {profiles[currentIndex].speak}</Text>
                    <Text style={styles.matchDetails}> <FontAwesome name="arrows-v" size={16} color={colors.text} /> Height: {profiles[currentIndex].height}</Text>
                    <View style={styles.hobbiesContainer}>
                      <Text style={styles.hobbies}>Interest</Text>
                      <View style={styles.hobbiesIcons}>
                        {profiles[currentIndex].hobbies.map((hobby, index) => (
                          <View key={index} style={styles.hobbyIcon}>
                            <FontAwesome name={hobbyIcons[hobby] || 'star'} size={16} color="#FFFF" />
                            <Text style={styles.hobbyText}>{hobby}</Text>
                          </View>
                        ))}
                      </View>
                    </View>
                  </View>
                  <Image source={{ uri: profiles[currentIndex].image2 }} style={styles.matchImage} />
                  <View style={styles.actionButtons}>
                    <TouchableOpacity style={styles.actionButton}>
                      <FontAwesome name="times" size={30} color="red" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <FontAwesome name="star" size={30} color="blue" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.actionButton}>
                      <FontAwesome name="thumbs-up" size={30} color="green" />
                    </TouchableOpacity>
                  </View>
                </ScrollView>
                <Animated.View style={[styles.swipeIconContainer, textAnimatedStyle]}>
                  <FontAwesome 
                    name="heart" 
                    size={90} 
                    color="#FF5864"
                  />
                </Animated.View>
              </Animated.View>
            </PanGestureHandler>
          ) : (
            <Text style={styles.noMoreMatches}>No more matches available.</Text>
          )}
        </View>
      </SafeAreaView>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  greeting: {
    fontSize: 16,
    color: colors.text,
  },
  username: {
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: colors.text,
  },
  icons: {
    flexDirection: 'row',
  },
  iconMargin: {
    marginLeft: 15,
  },
  cardContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    borderRadius: 10,
    backgroundColor: colors.inputBackground,
    overflow: 'hidden',
    elevation: 5,
  },
  matchImage: {
    width: '100%',
    height: 400,
    borderRadius: 10,
  },
  cardInfo: {
    padding: 10,
  },
  matchName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
  },
  matchDetails: {
    fontSize: 16,
    color: colors.text,
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    color: colors.text,
    marginVertical: 10,
  },
  hobbiesContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  hobbies: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: colors.text,
  },
  hobbiesIcons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
  },
  hobbyIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#FF5864',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  hobbyText: {
    marginLeft: 5,
    fontSize: 14,
    color: '#ffff',
  },
  noMoreMatches: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    marginTop: 50,
    marginBottom: 100,
  },
  actionButton: {
    padding: 10,
  },
  swipeIconContainer: {
    position: 'absolute',
    top: '50%',
    left: '70%',
    transform: [{ translateX: -30 }, { translateY: -30 }],
    opacity: 0.9,
  },
});

export default MatchScreen;
