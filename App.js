/* hooks & utils import */
import { StatusBar } from 'expo-status-bar'
import { View, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

/* styles import */
import styles from './App.module'

/* pages import */
import HomePage from './src/pages/HomePage'
import DishPage from './src/pages/DishPage'
import SettingPage from './src/pages/SettingPage'
import ProfilePage from './src/pages/ProfilePage'
import SideDishPage from './src/pages/SideDishPage'

/* components import */
import BottomNavigation from './src/components/BottomNavigation'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>

      <View style={styles.appContainer}>

        <View style={styles.appMain}>

          <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name='home' component={HomePage} />
            <Stack.Screen name='dishes' component={DishPage} />
            <Stack.Screen name='config' component={SettingPage} />
            <Stack.Screen name='profile' component={ProfilePage} />
            <Stack.Screen name='sideDish' component={SideDishPage} />

          </Stack.Navigator>
        </View>

        <BottomNavigation style={styles.appBottomNavigation} />

        <StatusBar style="light" backgroundColor='#6d64ff' />

      </View>


    </NavigationContainer>
  );
}