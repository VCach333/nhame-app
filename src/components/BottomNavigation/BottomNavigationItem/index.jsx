/* hooks & utils import */
import { Text, View, Image, TouchableOpacity } from 'react-native'

/* styles import */
import styles from './style.module'

/* icon import */
//import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function BottomNavigationItem({ navigation, route, label, img }) {

    return (
        <View style={styles.bottomNavigationItem}>

            <TouchableOpacity onPress={() => navigation.navigate(route)}>

                <View style={styles.bottomNavigationItemImg}>
                    {/* <MaterialCommunityIcons name={icon} size={24} color='#fff' /> */}
                    <Image source={img} style={styles.img} />
                </View>

                <Text style={styles.bottomNavigationItemLabel}>{label}</Text>

            </TouchableOpacity>

        </View>
    )
}