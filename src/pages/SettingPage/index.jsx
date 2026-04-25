/* hooks & utils import */
import { View, Text, Image } from 'react-native'

/* style import */
import styles from './style.module'

/* component import */
import Header from '../../components/Layouts/Header'


export default function SettingPage() {
  return (
    <>
      <Header pageTitle='Ajustes' />

      <View style={styles.settingPage}>
        
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

      </View>
    </>
  )
}