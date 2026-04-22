/* hooks & utils import */
import { View, Text } from 'react-native'

/* style import */
import styles from './style.module'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import SideNavigationItem from './SideNavigationItem'

export default function SideNavigation() {

    return (

        <View style={styles.sideNavigationContent}>

            <SideNavigationItem label='princial' img={require('../../../assets/icons/main-dish.png')} />
            <SideNavigationItem label='acomp.' img={require('../../../assets/icons/side-dish.png')} />
            <SideNavigationItem label='molho' img={require('../../../assets/icons/sauce.png')} />
            <SideNavigationItem label='ingred.' img={require('../../../assets/icons/tomato.png')} />
            <SideNavigationItem label='temp.' img={require('../../../assets/icons/spice-alt.png')} />

        </View>
    )
}