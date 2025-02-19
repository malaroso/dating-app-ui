import React, { useState } from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Animated, { useSharedValue } from 'react-native-reanimated';
import { colors } from '../../styles/colors';
import Header from '../../components/Header';
const stories = [
  {
    id: 1,
    username: 'Your Story',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    isSeen: false
  },
  {
    id: 2,
    username: 'johndoe',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg',
    isSeen: true
  },
  {
    id: 3,
    username: 'emilyrose',
    image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg',
    isSeen: false
  },
];

const matches = [
  { id: 1, name: 'Gracia, 23', location: 'London, UK', match: '90%', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
  { id: 2, name: 'Marvin, 23', location: 'London, UK', match: '80%', image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg' },
  { id: 3, name: 'Emma, 27', location: 'Paris, France', match: '70%', image: 'https://images.pexels.com/photos/3992656/pexels-photo-3992656.png?auto=compress&cs=tinysrgb&w=600' },
];

const chatRooms = [
  { id: 1, title: 'Music Lovers', image: 'https://images.pexels.com/photos/164854/pexels-photo-164854.jpeg' },
  { id: 2, title: 'Travel Buddies', image: 'https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg' },
  { id: 3, title: 'Foodies', image: 'https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg' },
  { id: 4, title: 'Tech Talk', image: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg' },
];

const recommendedUsers = [
  { id: 1, name: 'Alice, 24', location: 'Paris, France', image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg' },
  { id: 2, name: 'Bob, 29', location: 'Berlin, Germany', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg' },
];

const HomeScreen = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);
  const opacity = useSharedValue(0);
  const swipeText = useSharedValue('');

  return (
    <SafeAreaView style={styles.container}>
        <Header />

      <ScrollView style={styles.scrollView}>
        {/* Stories */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.storiesContainer}>
          {stories.map((story) => (
            <View key={story.id} style={styles.storyItem}>
              <View style={[styles.storyBorder, { borderColor: story.isSeen ? '#ddd' : colors.primary }]}>
                <Image source={{ uri: story.image }} style={styles.storyImage} />
              </View>
              <Text style={styles.storyUsername}>{story.username}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Search Bar */}
        <View style={styles.searchContainer}>
          <FontAwesome name="search" size={20} color="#ccc" />
          <TextInput placeholder="Search here..." style={styles.searchInput} />
        </View>

        {/* Best Matches */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Best Matches</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {matches.map((match) => (
              <View key={match.id} style={styles.matchCard}>
                <Image source={{ uri: match.image }} style={styles.matchImage} />
                <View style={styles.matchInfo}>
                  <Text style={styles.matchName}>{match.name}</Text>
                  <Text style={styles.matchLocation}>{match.location}</Text>
                  <View style={styles.matchBadge}>
                    <Text style={styles.matchBadgeText}>{match.match} Match</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Recommended For You */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recommended For You</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {recommendedUsers.map((user) => (
              <View key={user.id} style={styles.recommendedCard}>
                <Image source={{ uri: user.image }} style={styles.recommendedImage} />
                <View style={styles.recommendedInfo}>
                  <Text style={styles.recommendedName}>{user.name}</Text>
                  <Text style={styles.recommendedLocation}>{user.location}</Text>
                  <TouchableOpacity style={styles.superLikeButton}>
                    <Text style={styles.superLikeText}>Send Super Like</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* Chat Rooms */}
        <View style={styles.sectionLast}>
          <Text style={styles.sectionTitle}>Voice Chat Rooms</Text>
          <View style={styles.chatRoomGrid}>
            {chatRooms.map((room) => (
              <View key={room.id} style={styles.chatRoomCard}>
                <Image source={{ uri: room.image }} style={styles.chatRoomImage} />
                <Text style={styles.chatRoomTitle}>{room.title}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
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
  storiesContainer: {
    flexDirection: 'row',
    paddingVertical: 0,
    paddingHorizontal: 15,
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 15,
  },
  storyBorder: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  storyImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
  },
  storyUsername: {
    fontSize: 12,
    color: colors.text,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    margin: 15,
    padding: 10,
    borderRadius: 10,
  },
  searchInput: {
    marginLeft: 10,
    fontSize: 16,
    flex: 1,
  },
  section: {
    padding: 15,
  },
  sectionLast: {
    padding: 15,
    marginBottom: 50,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 15,
    marginBottom: 12,
  },
  matchCard: {
    width: 150,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  matchImage: {
    width: '100%',
    height: 100,
  },
  matchInfo: {
    padding: 10,
  },
  matchName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  matchLocation: {
    fontSize: 14,
    color: '#777',
  },
  matchBadge: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 5,
    marginTop: 5,
  },
  matchBadgeText: {
    color: '#fff',
    fontSize: 12,
  },
  recommendedCard: {
    width: 150,
    marginRight: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  recommendedImage: {
    width: '100%',
    height: 100,
  },
  recommendedInfo: {
    padding: 10,
  },
  recommendedName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  recommendedLocation: {
    fontSize: 14,
    color: '#777',
  },
  superLikeButton: {
    backgroundColor: colors.primary,
    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    alignItems: 'center',
  },
  superLikeText: {
    color: '#fff',
    fontSize: 12,
  },
  chatRoomGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
  },
  chatRoomCard: {
    width: '48%',
    marginBottom: 15,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 3,
  },
  chatRoomImage: {
    width: '100%',
    height: 100,
  },
  chatRoomTitle: {
    padding: 10,
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});

export default HomeScreen;
