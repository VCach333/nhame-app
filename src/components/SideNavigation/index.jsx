/* hooks & utils import */
import { View, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

/* style import */
import styles from './style.module'

/* component import */
import SideNavigationItem from './SideNavigationItem'

export default function SideNavigation() {

    const navigation = useNavigation()

    return (

        <View style={styles.sideNavigationContent}>

            <TouchableOpacity
                onPress={() => navigation.navigate('pratos')}
            >
                <SideNavigationItem
                    label='principal'
                    img={require('../../../assets/icons/main-dish-color-alt.png')}
                />

            </TouchableOpacity>

            <TouchableOpacity
                onPress={() => navigation.navigate('sideDish')}
            >
                <SideNavigationItem
                    label='acomp.'
                    img={require('../../../assets/icons/side-dish-color.png')}
                />
            </TouchableOpacity>

            <SideNavigationItem label='molho' img={require('../../../assets/icons/sauce-color.png')} />
            <SideNavigationItem label='ingred.' img={require('../../../assets/icons/ingredient-color.png')} />
            <SideNavigationItem label='temp.' img={require('../../../assets/icons/spice-color.png')} />

        </View>
    )
}