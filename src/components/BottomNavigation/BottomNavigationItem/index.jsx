/* hooks & utils import */
import { Text, View } from 'react-native';

/* styles import */
import styles from '../style.module';

/* icon import */
import { MaterialCommunityIcons } from '@expo/vector-icons'


export default function BottomNavigationItem({ label, icon }) {

    return (
        <View style={styles.bottomNavigationItem}>
            
            <View style={styles.bottomNavigationItemIcon}>
                <MaterialCommunityIcons name={icon} size={24} color='#333' />
            </View>

            <Text style={styles.bottomNavigationItemLabel}>{label}</Text>
        </View>
    )
}