/* hooks & utils import */
import { View, Text } from 'react-native'

/* style import */
import styles from './style.module'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SideNavigationItem from './SideNavigationItem'

export default function SideNavigation() {

    return (

        <View style={styles.sideNavigationContent}>

            <SideNavigationItem label='principal' img={require('../../../assets/icons/main-dish-color-alt.png')} />
            <SideNavigationItem label='acomp.' img={require('../../../assets/icons/side-dish-color.png')} />
            <SideNavigationItem label='molho' img={require('../../../assets/icons/sauce-color.png')} />
            <SideNavigationItem label='ingred.' img={require('../../../assets/icons/ingredient-color.png')} />
            <SideNavigationItem label='temp.' img={require('../../../assets/icons/spice-color.png')} />

        </View>
    )
}