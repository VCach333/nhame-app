/* hooks & utils import */
import { View, Text } from 'react-native'

/* style import */
//import styles from './style.module'
import pageStyles from '../style.module'

/* component import */
import Header from '../../components/Layouts/Header'
import CardContent from '../../components/Layouts/CardContent'
import SideNavigation from '../../components/SideNavigation'

export default function DishPage() {
  return (
    <>
      <Header pageTitle='Pratos' />

      <View style={pageStyles.pageContainer}>

        <CardContent />

        <SideNavigation />

      </View>
    </>
  )
}