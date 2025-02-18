import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, ScrollView, TouchableOpacity, Image } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const ChatScreen = () => {
    const messages = [
        { id: '1', text: "Hi there! How's it going?", time: '11:02 AM', sent: true },
        { id: '2', text: "Hey! I'm doing well, thanks for asking. How about you?", time: '11:03 AM', sent: false },
        { id: '3', text: "Great, thanks. I noticed that you like going to concerts. Have you been to any good shows recently?", time: '11:05 AM', sent: true },
        { id: '4', text: "Yes, I actually went to a great show last weekend. It was amazing.", time: '11:06 AM', sent: false },
        { id: '5', text: "That sounds like a lot of fun! Would you like to go together sometime?", time: '11:08 AM', sent: true },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity>
                    <FontAwesome name="arrow-left" size={24} color="#000" />
                </TouchableOpacity>
                <Text style={styles.title}>Peggie, 23</Text>
                <Image source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' }} style={styles.profileImage} />
            </View>
            <ScrollView style={styles.messagesContainer}>
                {messages.map((message) => (
                    <View key={message.id} style={styles.messageRow}>
                        {!message.sent && (
                            <Image source={{ uri: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' }} style={styles.messageProfileImage} />
                        )}
                        <View style={[styles.messageBubble, message.sent ? styles.sent : styles.received]}>
                            <Text style={styles.messageText}>{message.text}</Text>
                            <Text style={styles.messageTime}>{message.time}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.input}
                    placeholder="Message"
                    placeholderTextColor="#999"
                />
                <TouchableOpacity>
                    <FontAwesome name="paper-plane" size={24} color="#FF69B4" />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    title: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 20,
    },
    messagesContainer: {
        flex: 1,
        padding: 10,
    },
    messageRow: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginVertical: 5,
    },
    messageProfileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10,
    },
    messageBubble: {
        padding: 10,
        borderRadius: 10,
        maxWidth: '80%',
    },
    sent: {
        backgroundColor: '#FFFF',
        alignSelf: 'flex-end',
        marginLeft: 'auto',
    },
    received: {
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-start',
    },
    messageText: {
        fontSize: 16,
    },
    messageTime: {
        fontSize: 12,
        color: '#999',
        marginTop: 5,
        textAlign: 'right',
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#EEE',
    },
    input: {
        flex: 1,
        fontSize: 16,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 20,
        marginRight: 10,
    },
});

export default ChatScreen;