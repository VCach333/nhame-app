/* hooks & utils import */
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* styles import */
import styles from './App.module'

/* components import */
import BottomNavigation from './src/components/BottomNavigation'

const Stack = createNativeStackNavigator()

function InicioScreen() {
  return (
    <View>
      <Text>Inicio</Text>
    </View>
  )
}

function PratoScreen() {
  return (
    <View>
      <Text>Prato</Text>
    </View>
  )
}

function AjustesScreen() {
  return (
    <View>
      <Text>Ajustes</Text>
    </View>
  )
}

export default function App() {
  return (
    <NavigationContainer>

      <View style={styles.appContainer}>

        <View style={styles.appHeader}></View>

        <View style={styles.appMain}>
          <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name='inicio' component={InicioScreen} />
            <Stack.Screen name='pratos' component={PratoScreen} />
            <Stack.Screen name='config' component={AjustesScreen} />

          </Stack.Navigator>
        </View>

        <BottomNavigation style={styles.appBottomNavigation} />

        <StatusBar style="auto" />

      </View>
      
    </NavigationContainer>
  );
}