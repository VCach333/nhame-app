/* hooks & utils import */
import { View, Text, Image, TouchableOpacity } from 'react-native'

/* style import */
import styles from './style.module'

export default function SettingTheme({ img, label }) {

    return (

        <>
            <TouchableOpacity
                style={styles.themeContentItem}
                onPress={() => {}}
            >
                <Image
                    source={img}
                    style={styles.themeIcon}
                />
                <Text style={styles.themeText}>{label}</Text>
            </TouchableOpacity>
        </>
    )
}