/* hooks & utils import */
import { View, Text, Image } from 'react-native'

/* style import */
import styles from './style.module'

/* component import */
import Header from '../../components/Layouts/Header'
import SettingTheme from '../../components/Settings/Theme'


export default function SettingPage() {
  return (
    <>
      <Header pageTitle='Ajustes' />

      <View style={styles.settingPage}>
        <SettingTheme />
      </View>
    </>
  )
}