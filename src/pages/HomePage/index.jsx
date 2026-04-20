/* hooks & utils import */
import { View, Text } from 'react-native'

/* style import */
import styles from './style.module'
import pageStyles from '../style.module'

/* component import */
import Header from '../../components/Header'
//import CardContent from '../../components/Layouts/CardContent'

export default function HomePage() {
  return (
    <>
      <Header />

      <View style={pageStyles.pageContainer}></View>
    </>
  )
}