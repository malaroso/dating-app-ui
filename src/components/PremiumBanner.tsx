import { View, Text, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";



const PremiumBanner = () => {
    return (
        <View style={styles.premiumBanner}>
            <FontAwesome name="diamond" size={24} color="#FFFF" />
            <View style={styles.textContainer}>
                <Text style={styles.premiumBannerText}>
                    More Matches, More Chances! Get Premium Plan Now!
                </Text>
                <Text style={styles.premiumBannerSubText}>
                    Real Love is Just a Swipe Away! 🚀
                </Text>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    premiumBanner: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        width: '90%',
        alignSelf: 'center',
        borderRadius: 10,
        marginVertical: 13,
        backgroundColor: '#FF5864',
        gap: 20,
        paddingHorizontal: 20
    },
    textContainer: {
        flex: 1,
    },
    premiumBannerText: {
        color: '#FFF',
        fontSize: 16,
        fontFamily: 'Montserrat-Bold',
        marginBottom: 5,
        flexWrap: 'wrap',
    },
    premiumBannerSubText: {
        color: '#FFF',
        fontSize: 15,
        fontFamily: 'Montserrat-Regular',
        flexWrap: 'wrap',
    }
})

export default PremiumBanner;   