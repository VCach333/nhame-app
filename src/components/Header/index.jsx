/* hooks & utils import */
import { View, Text } from 'react-native'

/* styles import */
import styles from './style.module'

/* icon import */
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function Header({ pageTitle }) {

    return (
        <View style={styles.appHeader}>

            <View>
                <Text style={styles.pageTitle}>{pageTitle}</Text>
            </View>

            <View style={styles.userNameMask}>
                <Text style={styles.userName}>Anair Maria</Text>
                
                <View style={styles.iconMask}>
                    <MaterialCommunityIcons name='account-outline' size={18} color='#fff' />
                </View>
            </View>

        </View>
    )
}