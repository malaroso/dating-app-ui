import React, { useState } from "react";
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, ScrollView, Image, FlatList } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import PremiumBanner from "../../components/PremiumBanner";

const MyMatched = () => {
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filters = ['All', 'Online', 'Newest', 'Nearest', 'Popular'];

    const matches = [
        { id: '1', name: 'Gracia, 23', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg' },
        { id: '2', name: 'Marvin, 23', image: 'https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: '3', name: 'John, 23', image: 'https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=600' },
        { id: '4', name: 'İnji, 24', image: 'https://cdn.powergroup.com.tr/image/1280x1280/powerapp/u/Contents/i/n/inji-kimdir-kac-yasinda-nereli-gercek-adi-ne-1706021521.png' },
 
    ];

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.topMenu}>
                <Text style={styles.title}>My Matched</Text>
            </View>

            <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.filterScroll}>
                {filters.map((filter) => (
                    <TouchableOpacity
                        key={filter}
                        style={filter === selectedFilter ? styles.filterItemActive : styles.filterItem}
                        onPress={() => setSelectedFilter(filter)}
                    >
                        <Text style={filter === selectedFilter ? styles.filterTextActive : styles.filterText}>{filter}</Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>

            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <PremiumBanner />
                <View style={styles.matchesContainer}>
                    {matches.map((match) => (
                        <View key={match.id} style={styles.matchedItem}>
                            <View style={styles.imageContainer}>
                                <Image source={{ uri: match.image }} style={styles.matchedItemImage} />
                                <FontAwesome name="heart" size={24} color="#FF5864" style={styles.heartIcon} />
                                <FontAwesome name="times" size={24} color="#1C1C1C" style={styles.crossIcon} />
                            </View>
                            <Text style={styles.matchedItemText}>{match.name}</Text>
                        </View>
                    ))}
                </View>
                <View style={styles.clear}></View>
            </ScrollView>

        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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
    scrollContainer: {
        paddingHorizontal: 0,
    },
    matchesContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    matchedItem: {
        width: '48%',
        marginVertical: 5,
        alignItems: 'center',
    },
    imageContainer: {
        position: 'relative',
    },
    matchedItemImage: {
        width: 120,
        height: 120,
        borderRadius: 10,
    },
    heartIcon: {
        position: 'absolute',
        top: 5,
        left: 5,
    },
    crossIcon: {
        position: 'absolute',
        backgroundColor: '#FFF',
        borderRadius: 100,
        padding: 5,
        top: -10,
        right: -5,
        opacity: 0.7,
    },
    matchedItemText: {
        marginTop: 5,
        fontSize: 16,
        fontWeight: 'bold',
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
  
    filterItem: {
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 60,
        marginHorizontal: 5,
        borderRadius: 20,
        height: 40,
        backgroundColor: '#f0f0f0',
    },
    filterItemActive: {
        padding: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 60,
        marginHorizontal: 5,
        borderRadius: 20,
        height: 40,
        color: '#FFFF',
        backgroundColor: '#FF5864',
    },
    filterText: {
        color: '#000', 
    },
    filterTextActive: {
        color: '#FFF', 
    },

    filterScroll: {
        flexDirection: 'row',
        paddingVertical: 20, 
    },
    matchedContainer: {
        paddingHorizontal: 10,
        paddingTop: 0, 
    },
    clear: {
        height: 100,
    }


})

export default MyMatched;