/* hooks & utils import */
import { Text, View } from 'react-native';

/* styles import */
import styles from './style.module';

/* icon import */

/* component import */
import BottomNavigationItem from './BottomNavigationItem'

export default function BottomNavigation() {

    return (
        <View style={styles.bottomNavigation}>

            <BottomNavigationItem
                style={styles.bottomNavigationItem}
                label='Início'
                icon='home-variant-outline'
            />

            <BottomNavigationItem
                style={styles.bottomNavigationItem}
                label='Pratos'
                icon='rice'
            />

            <BottomNavigationItem
                style={styles.bottomNavigationItem}
                label='Ajustes'
                icon='cog-outline'
            />

        </View>
    )
}