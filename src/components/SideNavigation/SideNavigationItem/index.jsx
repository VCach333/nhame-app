/* hooks & utils import */
import { View, Text, Image } from 'react-native'

/* style import */
import styles from './style.module'

export default function SideNavigationItem({ label, img }) {

    return (

        <View style={styles.sideNavigationContentItem}>
            <View style={styles.imgMask}>
                <Image source={img} style={styles.img} />
            </View>

            <Text style={styles.imgDesc}>{label}</Text>
        </View>
    )
}