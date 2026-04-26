/* hooks & utils import */
import { Text, View, Image, TouchableOpacity } from 'react-native'

/* styles import */
import styles from './style.module'

export default function BottomNavigationItem({ navigation, route, label, img }) {

    return (
        <View style={styles.bottomNavigationItem}>

            <TouchableOpacity onPress={() => navigation.navigate(route)}>

                <View style={styles.bottomNavigationItemImg}>
                    <Image source={img} style={styles.img} />
                </View>

                <Text style={styles.bottomNavigationItemLabel}>{label}</Text>

            </TouchableOpacity>

        </View>
    )
}