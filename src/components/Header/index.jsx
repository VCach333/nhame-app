/* hooks & utils import */
import {View, Text} from 'react-native'

/* styles import */
import styles from './style.module'

/* icon import */
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header() {

    return (
        <View style={styles.appHeader}>
            
            <View style={styles.userNameMask}>
                <Text style={styles.userName}>Anair Maria</Text>
            </View>

            <View style={styles.iconMask}>
                <MaterialCommunityIcons name='account-outline' size={24} color='#6d64ff' />
            </View>

        </View>
    )
}