import { FontAwesome } from "@expo/vector-icons"
import { TouchableOpacity, View, Text, Image, StyleSheet } from "react-native"
import { colors } from "../styles/colors"


const Header = () => {
    return (

       <View style={styles.header}>
       <View style={styles.userInfo}>
         <Image
           source={require('../../assets/300-2.jpg')}
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
    
    )
}   

const styles = StyleSheet.create({
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
})

export default Header;
