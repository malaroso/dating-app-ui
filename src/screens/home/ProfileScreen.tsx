import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { colors } from '../../styles/colors';

const ProfileScreen = () => {
    const user = {
        name: 'Malarosso Infotech',
        email: 'malarossoinfotech@gmail.com',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg',
    };

    const options = [
        { icon: 'diamond', label: 'Get Premium Plan' },
        { icon: 'user', label: 'Your Profile' },
        { icon: 'credit-card', label: 'Payment Methods' },
        { icon: 'cog', label: 'Settings' },
        { icon: 'question-circle', label: 'Help Center' },
        { icon: 'users', label: 'Invite Friends' },
        { icon: 'file-text', label: 'Privacy Policy' },
        { icon: 'sign-out', label: 'Logout' },
    ];

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.topMenu}>
                    <Text style={styles.title}>Profile</Text>
                </View>

                <LinearGradient colors={[colors.gradientStart, colors.gradientEnd]} style={styles.profileCard}>
                    <Image source={{ uri: user.image }} style={styles.profileImage} />
                    <View style={styles.profileInfo}>
                        <Text style={styles.name}>{user.name}</Text>
                        <Text style={styles.email}>{user.email}</Text>
                    </View>
                    <FontAwesome name="chevron-right" size={24} color="#FFF" />
                </LinearGradient>
                {options.map((option, index) => (
                    <TouchableOpacity key={index} style={styles.option}>
                        <FontAwesome name={option.icon as any} size={24} color="#FF5864" style={styles.optionIcon} />
                        <Text style={styles.optionText}>{option.label}</Text>
                        <FontAwesome name="chevron-right" size={24} color="#FF5864" />
                    </TouchableOpacity>
                ))}
                <View style={styles.clear}> </View>
               
            </ScrollView>
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
        padding: 15,
    },
    topMenu: {
        flexDirection: 'row',
        padding: 10,
        width: '100%',
        height: 60,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
    },
    backButton: {
        padding: 12,
        marginLeft: 10,
        borderRadius: 30,
        position: 'absolute',
        left: 10,
        backgroundColor: '#FF5864',
    },
    title: {
        fontSize: 21,
        fontWeight: 'bold',
        color: '#FF5864',
    },
  
    profileCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderRadius: 10,
        margin: 15,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginRight: 15,
    },
    profileInfo: {
        flex: 1,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    email: {
        fontSize: 14,
        color: '#FFF',
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#EEE',
    },
    optionIcon: {
        marginRight: 15,
    },
    optionText: {
        flex: 1,
        fontSize: 16,
        fontFamily: 'Montserrat-Medium',
        color: '#4A4A4A',
    },
    clear: {
        height: 100,
    }
});

export default ProfileScreen;