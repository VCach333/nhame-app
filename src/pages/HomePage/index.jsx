/* hooks & utils import */
import { View, Text } from 'react-native'

/* style import */
import styles from './style.module'
import pageStyles from '../style.module'

/* component import */
import Header from '../../components/Layouts/Header'
//import CardContent from '../../components/Layouts/CardContent'

export default function HomePage() {
  return (
    <>
      <Header pageTitle='Início' />

      <View style={pageStyles.pageContainer}></View>
    </>
  )
}