/* hooks & utils import */
import { Text, View } from 'react-native';

/* styles import */
import styles from '../style.module';


export default function BottomNavigationItem({label, icon}) {

    return (
        <View style={styles.bottomNavigationItem}>
            <Text>{label}</Text>
        </View>
    )
}