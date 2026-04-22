/* hooks & utils import */
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

/* styles import */
import styles from './style.module'

/* component import */
import BottomNavigationItem from './BottomNavigationItem'

export default function BottomNavigation() {

    const navigation = useNavigation()

    return (
        <View style={styles.bottomNavigation}>

            <BottomNavigationItem
                style={styles.bottomNavigationItem}
                navigation={navigation}
                route='inicio'
                label='Início'
                icon='home-variant-outline'
                />

            <BottomNavigationItem
                style={styles.bottomNavigationItem}
                navigation={navigation}
                route='pratos'
                label='Pratos'
                icon='rice'
                />

            <BottomNavigationItem
                style={styles.bottomNavigationItem}
                navigation={navigation}
                route='config'
                label='Ajustes'
                icon='cog-outline'
            />

        </View>
    )
}