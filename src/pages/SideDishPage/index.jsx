/* hooks & utils import */
import { View, Text } from 'react-native'

/* styles import */
import styles from './style.module'

/* components import */
import Header from '../../components/Layouts/Header'
import SideNavigation from '../../components/SideNavigation'
import CardContent from '../../components/Layouts/CardContent'

export default function SideDishPage() {

    return (
        <View>

            <Header pageTitle='Acompanhante' />
            <CardContent />
            <SideNavigation />
        </View>
    )
}