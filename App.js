/* hooks & utils import */
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* styles import */
import styles from './App.module'

/* pages import */
import InicioPage from './src/pages/InicioPage'
import PratosPage from './src/pages/PratosPage'
import AjustesPage from './src/pages/AjustesPage'

/* components import */
import BottomNavigation from './src/components/BottomNavigation'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <View style={styles.appContainer}>

        <View style={styles.appHeader}></View>

        <View style={styles.appMain}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name='inicio' component={InicioPage} />
            <Stack.Screen name='pratos' component={PratosPage} />
            <Stack.Screen name='config' component={AjustesPage} />

          </Stack.Navigator>
        </View>

        <BottomNavigation style={styles.appBottomNavigation} />

        <StatusBar style="auto" />

      </View>
      
    </NavigationContainer>
  );
}