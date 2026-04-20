/* hooks & utils import */
import { Text, View } from 'react-native';

/* styles import */
import styles from './style.module';

/* icon import */

/* component import */
import BottomNavigationItem from './BottomNavigation'

export default function BottomNavigation() {

    return (
        <View style={styles.bottomNavigation}>

            <BottomNavigationItem
                style={styles.bottomNavigationItem}
                label='ico'
                icon='padding'
            />

            <BottomNavigationItem
                style={styles.bottomNavigationItem}
                label='ico'
                icon='padding'
            />

            <BottomNavigationItem
                style={styles.bottomNavigationItem}
                label='ico'
                icon='padding'
            />

            <BottomNavigationItem
                style={styles.bottomNavigationItem}
                label='ico'
                icon='padding'
            />

        </View>
    )
}