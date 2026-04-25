/* hooks & utils import */
import { View, Text, Image } from 'react-native'

/* style import */
import styles from './style.module'

/* component import */
import ThemeItem from './ThemeItem'

export default function SettingTheme() {

    return (

        <View style={styles.themeContent}>

            <ThemeItem
                img={require('../../../../assets/icons/setting.png')}
                label='Sistema'
            />

            <ThemeItem
                img={require('../../../../assets/icons/setting.png')}
                label='Claro'
            />

            <ThemeItem
                img={require('../../../../assets/icons/setting.png')}
                label='Escuro'
            />

        </View>
    )
}