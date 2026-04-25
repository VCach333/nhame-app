/* hooks & utils import */
import { View, Text, Image } from 'react-native'

/* style import */
import styles from './style.module'

export default function SettingTheme() {

    return (

        <View style={styles.themeContent}>

            <View style={styles.themeContentItem}>
                <Image
                    source={require('../../../assets/icons/setting.png')}
                    style={styles.themeIcon}
                />
                <Text style={styles.themeText}>Sistema</Text>
            </View>

            <View style={styles.themeContentItem}>
                <Image
                    source={require('../../../assets/icons/setting.png')}
                    style={styles.themeIcon}
                />
                <Text style={styles.themeText}>Claro</Text>
            </View>

            <View style={styles.themeContentItem}>
                <Image
                    source={require('../../../assets/icons/setting.png')}
                    style={styles.themeIcon}
                />
                <Text style={styles.themeText}>Escuro</Text>
            </View>

        </View>
    )
}