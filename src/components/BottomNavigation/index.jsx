/* hooks & utils import */
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'

/* styles import */
import styles from './style.module'

/* component import */
import BottomNavigationItem from './BottomNavigationItem'

export default function BottomNavigation() {

    const navigation = useNavigation()

    return (
        <View style={styles.bottomNavigation}>

            <BottomNavigationItem
                navigation={navigation}
                route='inicio'
                label='Início'
                img={require('../../../assets/icons/home.png')}
                />

            <BottomNavigationItem
                navigation={navigation}
                route='pratos'
                label='Pratos'
                img={require('../../../assets/icons/home.png')}
                />

            <BottomNavigationItem
                navigation={navigation}
                route='config'
                label='Ajustes'
                img={require('../../../assets/icons/home.png')}
            />

        </View>
    )
}