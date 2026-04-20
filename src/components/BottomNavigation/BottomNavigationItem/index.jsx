/* hooks & utils import */
import { Text, View, TouchableOpacity } from 'react-native';

/* styles import */
import styles from '../style.module';

/* icon import */
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function BottomNavigationItem({ navigation, route, label, icon }) {

    return (
        <View style={styles.bottomNavigationItem}>

            <TouchableOpacity onPress={() => navigation.navigate(route)}>

                <View style={styles.bottomNavigationItemIcon}>
                    <MaterialCommunityIcons name={icon} size={24} color='#333' />
                </View>

                <Text style={styles.bottomNavigationItemLabel}>{label}</Text>

            </TouchableOpacity>

        </View>
    )
}