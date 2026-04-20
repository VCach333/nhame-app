/* hooks & utils import */
import { Text, View } from 'react-native';

/* styles import */
import styles from './style.module';

/* icon import */

export default function BottomNavigation() {

    return (
        <View style={styles.bottomNavigation}>

            <View style={styles.bottomNavigationItem}>
                <Text>ico</Text>
            </View>

            <View style={styles.bottomNavigationItem}>
                <Text>ico</Text>
                
            </View>

            <View style={styles.bottomNavigationItem}>
                <Text>ico</Text>
                
            </View>

            <View style={styles.bottomNavigationItem}>
                <Text>ico</Text>
                
            </View>

        </View>
    )
}