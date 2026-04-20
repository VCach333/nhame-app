/* hooks & utils import */
import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';

/* styles import */
import styles from './App.module'

/* components import */
import BottomNavigation from './src/components/BottomNavigation'

export default function App() {
  return (
    <View style={styles.appContainer}>

      <View style={styles.appHeader}></View>
      
      <View style={styles.appMain}></View>
      
      <BottomNavigation style={styles.appBottomNavigation} />

      <StatusBar style="auto" />
    </View>
  );
}
