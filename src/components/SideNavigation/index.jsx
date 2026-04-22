/* hooks & utils import */
import { View, Text } from 'react-native'

/* style import */
import styles from './style.module'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function SideNavigation() {

    return (

        <View style={styles.sideNavigationContent}>

            <View style={styles.sideNavigationContentItem}>
                <View style={styles.iconMask}>
                    <MaterialCommunityIcons name='rice' size={24} color='#fff' />
                </View>

                <Text style={styles.iconDesc}>desc</Text>
            </View>

        </View>
    )
}