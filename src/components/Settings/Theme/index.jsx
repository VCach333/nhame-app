/* hooks & utils import */
import { View, Text, Image } from 'react-native'

/* style import */
import styles from './style.module'

/* component import */
import ThemeItem from './ThemeItem'

export default function SettingTheme() {

    return (

        <>
            <View style={styles.themeHeader}>
                <Text style={styles.themeHeaderText}>Tema</Text>
            </View>

            <View style={styles.themeContent}>

                <ThemeItem
                    img={require('../../../../assets/icons/theme-sistem.png')}
                    label='Sistema'
                />

                <ThemeItem
                    img={require('../../../../assets/icons/theme-light.png')}
                    label='Claro'
                />

                <ThemeItem
                    img={require('../../../../assets/icons/theme-dark.png')}
                    label='Escuro'
                />

            </View>
        </>
    )
}