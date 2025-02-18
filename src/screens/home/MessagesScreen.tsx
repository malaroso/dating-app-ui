import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const MessagesScreen = () => {
    const navigation = useNavigation();
    const matches = [
        { id: '1', name: 'Dianne', age: 19, image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
        { id: '2', name: 'Jane', age: 21, image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg' },
        // Diğer eşleşmeler...
    ];

    const chats = [
        { id: '1', name: 'Peggie', age: 23, message: 'That sounds like a lot of fun! Would you like...', time: '5 mins', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
        { id: '2', name: 'Eve', age: 22, message: "I'm good! Thanks", time: '38 mins', image: 'https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg' },
        // Diğer sohbetler...
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topMenu}>
                <Text style={styles.title}>Messages</Text>
            </View>
            <View style={styles.matchesContainer}>
                <FlatList
                    horizontal
                    data={matches}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={styles.matchItem}>
                            <Image source={{ uri: item.image }} style={styles.matchImage} />
                            <Text style={styles.matchName}>{item.name}, {item.age}</Text>
                        </View>
                    )}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
            <View style={styles.searchContainer}>
                <FontAwesome name="search" size={20} color="#999" />
                <TextInput
                    style={styles.searchInput}
                    placeholder="Search"
                    placeholderTextColor="#999"
                />
            </View>
            <FlatList
                data={chats}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.chatItem} onPress={() => navigation.navigate('chatScreen')}>
                        <Image source={{ uri: item.image }} style={styles.chatImage} />
                        <View style={styles.chatInfo}>
                            <Text style={styles.chatName}>{item.name}, {item.age}</Text>
                            <Text style={styles.chatMessage}>{item.message}</Text>
                        </View>
                        <Text style={styles.chatTime}>{item.time}</Text>
                    </TouchableOpacity>
                )}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    topMenu: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#FF5864',
    },
    matchesContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
    },
    matchItem: {
        alignItems: 'center',
        marginRight: 15,
    },
    matchImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginBottom: 5,
    },
    matchName: {
        fontSize: 12,
        color: '#333',
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
    chatItem: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    chatImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    chatInfo: {
        flex: 1,
    },
    chatName: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    chatMessage: {
        fontSize: 14,
        color: '#777',
    },
    chatTime: {
        fontSize: 12,
        color: '#999',
    },
});

export default MessagesScreen;